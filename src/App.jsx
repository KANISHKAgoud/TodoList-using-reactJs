import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar'

function App() {
  // const [count, setCount] = useState(0)
  const [todo_data, settodo_data] = useState("")
  const [alltodos, setAlltodos] = useState([])

  const handleChange = (e) => {
    settodo_data (e.target.value)
    console.log(alltodos)
  }

  const handledelete = () => {
    
  }
  const handleedit = () => {
    
  }
  const handleadd = () => {
    setAlltodos ([...alltodos, {todo, iscompleted : false }])
    settodo_data ("")
  }
  
  

  return (
    <>
      <div className='mx-auto bg-green-50'>
        <Navbar />
        <div className='bg-green-100 w-3/4 mx-auto my-4 p-4 rounded-xl'>
          <div className='flex gap-x-8 font-bold text-xl justify-center'>
            <li className='list-none'>Add todo</li>
            <input className='rounded-2xl' type="text" value={todo_data} onChange={handleChange}/>
            <button className='bg-green-600 h-10 w-24 rounded-md cursor-pointer hover:bg-green-800' onClick={handleadd}>ADD</button>
          </div>
          <div className='font-bold text-2xl'>Your Todos</div>

          <div className='text-lg flex gap-x-7 my-8'>
            
            <div className='w-1/4 bg-green-50 rounded-lg h-8 pl-3'>content</div>
            <button onClick={handleedit}><i class="fa-solid fa-pen-to-square"></i></button>
            <button onClick={handledelete}><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
