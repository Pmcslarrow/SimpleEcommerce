import Navbar from './components/navbar'
import Features from './components/features'
import Products from './components/products'

function Whitespace(props)
{
  return (
    <div className='underline text-3xl p-20 text-center'>{props.title}</div>
  )
}

export default function Homepage() {
  return (
    <>
    <div className="font-mono bg-beige-300">
        <Navbar />
        <Features />

        <div className='bg-army'>
          <Whitespace title="Products"/> 
          <Products />
        </div>
    </div>
    </>

  )
}
