import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar'

function App() {
  // const [count, setCount] = useState(0)
  const [todo, settodo] = useState("")
  const [alltodos, setAlltodos] = useState([])
  const [Editindex, setEditindex] = useState(null)

  let handleChange = (e) => {
    settodo(e.target.value)
  }

  let handledelete = (index) => {
    setAlltodos(alltodos.filter((e,i) => {
      i !== index
    }))
  }
  let handleedit = (index) => {
    settodo(alltodos[index])
    setEditindex(index)
  }

  let handleadd = () => {
    let updated = [...alltodos]
    if (Editindex === null)
    {
    updated.push(todo)
    }
    else{
      updated[Editindex] = todo
    }
    setAlltodos(updated)
    setEditindex(null)
    settodo("")

  }



  return (
    <>
      <div className='mx-auto bg-green-50'>
        <Navbar />
        <div className='bg-green-100 w-3/4 mx-auto my-4 p-4 rounded-xl'>
          <div className='flex gap-x-8 font-bold text-xl justify-center'>
            <li className='list-none'>Add todo</li>
            <input className='rounded-2xl' type="text" value={todo} onChange={handleChange} />
            <button className='bg-green-600 h-10 w-24 rounded-md cursor-pointer hover:bg-green-800' onClick={handleadd}>
              {Editindex === null ? "ADD" : "UPDATE"}
            </button>
          </div>
          <div className='font-bold text-2xl'>Your Todos</div>

          {alltodos.map((e,index) => {
            return (<div key={index} className='relative text-lg bg-green-50 flex gap-x-7 my-8'>

              <div className=' w-1/4 rounded-lg h-8 pl-3'>{e}</div>
              <div className='absolute flex gap-x-9 right-4'>
              <button className='' onClick={() => handleedit(index)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className='' onClick={() => handledelete(index)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
              </div>
            </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default App
