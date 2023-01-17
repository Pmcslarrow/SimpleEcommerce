import largeCamera from './images/camera-large.jpg'
import normalCamera from './images/camera.jpg'
import iphone from './images/iphone.jpg'
import photo1 from './images/iphone.jpg'
import photo2 from './images/ricoh.png'
import photo3 from './images/lumix.jpg'
import photo4 from './images/small-red.jpg'
import photo5 from './images/canon.png'
import photo6 from './images/lens-2.jpg'
import { CartContext } from './CartContext'
import { useContext, useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

const products = [
  {id: 0, name: "IPhone", price: 599, source:photo1, quantity: 1},
  {id: 1, name: "Pentax Camera", price: 399, source:photo2, quantity: 1},
  {id: 2, name: "Lumix Camera", price: 699, source:photo3, quantity: 1},
  {id: 3, name: "Olympus Pocket Camera", price: 199, source:photo4, quantity: 1},
  {id: 4, name: "Canon EOS R6", price: 799, source:photo5, quantity: 1},
  {id: 5, name: "Lens", price: 1099, source:photo6, quantity: 1},
]


function Whitespace(props)
{
  return (
    <div className='underline text-3xl p-10 text-center'>{props.title}</div>
  )
}

function Features()
{
    return (
        <div>

            <div className="grid grid-cols-3 grid-rows-2 gap-10 place-items-center">

                <section className="col-span-2 row-span-2 grayscale transition ease-in-out hover:grayscale-0 hover:scale-105">
                    <div>
                        <img src={largeCamera} alt="An image of a floating camera" />
                    </div>
                </section>


                <section className="grayscale transition ease-in-out hover:grayscale-0 hover:scale-105">
                    <div>
                        <img src={normalCamera} alt="Picture of a camera" />
                    </div>
                </section>

                <section className="grayscale transition ease-in-out duration-100 hover:grayscale-0 hover:scale-105">
                    <div>
                        <img src={iphone} alt="" />
                    </div>
                </section>
            </div>

        </div>
    )
}

function Navbar()
{
  return (
    <nav>
      <ul className='flex flex-row gap-10'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/cart">Cart</Link></li>

      </ul>
    </nav>
  )
}

function Products(){
    const {cart, setCart} = useContext(CartContext)

    function handleClick(event)
    {
        let id = event.target.id
        if (cart.includes(products[id]))
        {
          const index = cart.indexOf(products[id])
          cart[index].quantity++
        } else {
          const updateCart = [
              ...cart,
              products[id]
          ]
          setCart(updateCart)
        }
    }    

    useEffect(() => {
        console.log(cart)
    }, [cart])

    const listOfProducts = products.map((object) =>
        <li key={object.id}>
            <div className="bg-beige-100">
                <div className='flex flex-col'>
                    <img className="max-w-lg max-h-72" src={object.source} alt="photo1"></img>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <section className='text-xl'>{object.name}</section>
                            <section className='text-xs'>${object.price}</section>
                        </div>
                        <button id={object.id} className='bg-bright-orange p-2' onClick={handleClick}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </li>
    );


    return (
        <>
            <div>
                <div> 
                    <ul className="grid grid-cols-3 gap-5 p-6">{listOfProducts}</ul>
                </div>
            </div>
        </>
        
    )
}

function Cart()
{
    const {cart, setCart} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)

    
    useEffect(() => {
      let total = 0
      cart.map((item) => {
        for (let i = item.quantity; i > 0; i--)
        {
          total += item.price
        }
      })
      setTotalPrice(total)
    }, [])

    useEffect(() => {
      getTotalValue()
    }, [handleRemove, handleAdd, handleSubtract])

    function getTotalValue()
    {
      let total = 0
      cart.map((item) => {
        for (let i = item.quantity; i > 0; i--)
        {
          total += item.price
        }
      })
      setTotalPrice(total)
    }

    function handleRemove(event, object) {
      let index = cart.indexOf(object)
      let newArr = [...cart]
      if ( index > -1 )
      {
        newArr.splice(index, 1);
      }
      setCart(newArr)
    }

    function handleAdd(event, object) {
      let newArr = [...cart]
      let index = cart.indexOf(object)
      newArr[index].quantity++
      setCart(newArr)
    }

    function handleSubtract(event, object)
    {
      let newArr = [...cart]
      let index = cart.indexOf(object)
      newArr[index].quantity--
      
      if (index > -1 && newArr[index].quantity <= 0) { 
        newArr.splice(index, 1);
      }
      setCart(newArr)
    }

    const listOfProducts = cart.map((object) => 
      <li key={Math.random() * 1000} className="p-2">
            <div className="bg-army">
                <div className='flex flex-row justify-around'>
                    <img className="max-w-xs max-h-xs w-40" src={object.source} alt="photo1"></img>
                    <div>
                      <section className='text-xl'>{object.name}</section>
                      <section className='text-xl'>${object.price}</section>
                      <section className='text-xl'>
                        Quantity: {object.quantity}
                          <button className='text-xl border p-1 ml-2' onClick={(event) => handleSubtract(event, object)}>-</button>
                          <button className='text-xl border p-1' onClick={(event) => handleAdd(event, object)}>+</button>
                        </section>
                    </div>

                    <section><button className='border' onClick={(event) => handleRemove(event, object)}>Remove</button></section>
                </div>
            </div>
        </li>
      
  );


    return (
      <>
        <Navbar />
        <Whitespace />
        <div className='flex flex-row gap-40'>
          
          <div className='flex flex-col w-3/4 gap-10'>
              <label className='text-4xl'>Shopping Cart</label>
              <ul>
                {cart.length === 0 ? "Empty" : listOfProducts}
              </ul>
          </div>
          
          <div className='flex flex-col'>
            <label className='text-4xl'>Order Summary</label>
            <section>
              <div>Total: ${totalPrice}</div>
            </section>
          </div>
          
        
        </div>
      </>
    )
}

function Homepage() {

  return (
    <>
      <Navbar />
      <Features />
      <div className='bg-army'>
        <Whitespace title="Products"/> 
        <Products />
      </div>
    </>        
  )}


export default function App() {
  const [cart, setCart] = useState([])

  return (
      <Router>
        <CartContext.Provider value={{cart, setCart}}>
          <Routes>
                  <Route path="/" element={<Homepage/>}></Route>
                  <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
        </CartContext.Provider>
      </Router>
  )
}
