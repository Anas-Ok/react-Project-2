import ProductCard from './components/ProductCard'
import products, { formInputsList } from './data'
import Model from './components/UI/Model'
import Button from './components/UI/Button'
import { ChangeEvent, useState } from 'react'
import Input from './components/UI/Input'
import { IProduct } from './interfaces'

const App = () => {
  
  const [isOpen, setIsOpen] = useState(true)

  const [product, setProduct] = useState<IProduct>({
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: ''
    }
  })


  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct( {
      
        ...product,
        [name]: value,
      
      }
    )

  }

  const renderproductlist = products.map((product) => <ProductCard key={product.id} Product={product}/>)
  const renderforminputs = formInputsList.map((formInput) =>
   
  <div className='flex flex-col'>
    <label  htmlFor={formInput.id} className='text-black mb-[2px]'>{formInput.label}</label>
    <Input type={formInput.type} id={formInput.id} name={formInput.name} value={product[formInput.name]} onChange={onChangeHandler}/>
  </div>
  )

  return (
    <main className='container'>

      <Button
              onClick={() => open()}
              className=" rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white focus:outline-none "
            >
              Add
            </Button>

      <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 rounded-md gap-5'>
        {renderproductlist}
      </div>

      <Model isOpen={isOpen} close={close} title='ADD PRODUCT'>
          <form className='space-y-2' onSubmit={(e) => e.preventDefault()}>
            {renderforminputs}
            <div className='flex items-center space-x-4 '>
              <Button className='bg-indigo-600 hover:bg-indigo-800 mt-3'>Submit</Button>
              <Button onClick={() => close()} className='bg-gray-400 hover:bg-gray-600 mt-3'>Cancel</Button>
            </div>
          </form>

      </Model>

    </main>

    
  )
}

export default App

