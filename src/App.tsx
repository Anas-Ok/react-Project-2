import ProductCard from './components/ProductCard'
import products from './data'
import Model from './components/UI/Model'
import Button from './components/UI/Button'
import { useState } from 'react'

const App = () => {
  
  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const renderproductlist = products.map((product) => <ProductCard key={product.id} Product={product}/>)


  return (
    <main className='container'>

      <Button
              onClick={() => open()}
              className="rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white focus:outline-none "
            >
              Add
            </Button>

      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 rounded-md gap-5'>
        {renderproductlist}
      </div>

      <Model isOpen={isOpen} close={close} title='ADD PRODUCT'>
        <div className='flex items-center space-x-4'>
          <Button className='bg-indigo-600 hover:bg-indigo-800'>Submit</Button>
          <Button onClick={() => close()} className='bg-gray-400 hover:bg-gray-600'>Cancel</Button>
        </div>
      </Model>

    </main>

    
  )
}

export default App

