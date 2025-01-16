import React from 'react'

const navbar = () => {
  return (
    <div>
      <div className="bg-green-200 px-64 py-2 flex justify-between h-12 ">
        <div className='font-bold text-2xl'>
        TaskHive
        </div>
        <ul className='flex gap-x-32 text-lg font-medium'>
            <li className='cursor-pointer hover:font-bold '>HOME</li>
            <li className='cursor-pointer hover:font-bold'>YOUR TASKS</li>
        </ul>
      </div>
    </div>
  )
}

export default navbar
