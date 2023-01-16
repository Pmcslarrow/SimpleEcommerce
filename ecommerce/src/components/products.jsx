import photo1 from '../images/iphone.jpg'
import photo2 from '../images/ricoh.png'
import photo3 from '../images/lumix.jpg'
import photo4 from '../images/small-red.jpg'
import photo5 from '../images/canon.png'
import photo6 from '../images/lens-2.jpg'

export default function Products(){

    const products = [
        {name: "IPhone", price: "$599.99", source:photo1},
        {name: "Pentax Camera", price: "$399.99", source:photo2},
        {name: "Lumix Camera", price: "$699.99", source:photo3},
        {name: "Olympus Pocket Camera", price: "$199.99", source:photo4},
        {name: "Canon EOS R6", price: "$799.99", source:photo5},
        {name: "Lens", price: "$1099.99", source:photo6},
    ]

    const listOfProducts = products.map((object) =>
        <li>
            <div className="bg-beige-100">
                <div className='flex flex-col'>
                    <img className="max-w-lg max-h-72" src={object.source} alt="photo1"></img>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <section className='text-xl'>{object.name}</section>
                            <section className='text-xs'>{object.price}</section>
                        </div>
                        <button className='bg-bright-orange p-2'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </li>
    );


    return (
        <div>

            <div> 
                <ul className="grid grid-cols-3 gap-5 p-6">{listOfProducts}</ul>
            </div>

        </div>
    )
}