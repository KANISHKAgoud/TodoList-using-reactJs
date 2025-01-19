import React from 'react'

const navbar = () => {
  return (
    <div>
      <div className="bg-green-200 px-64 py-2 justify-between lg:flex lg:h-12 sm:h-28 sm:gap-y-3">
        <div className='font-bold text-2xl sm:flex sm:justify-center'>
        TaskHive
        </div>
        <div className='flex gap-x-32 text-lg w-full bg-black font-medium sm:justify-center sm:pt-6 lg:pt-1 '>
            <div className='cursor-pointer hover:font-bold '>HOME</div>
            <div className='cursor-pointer hover:font-bold whitespace-nowrap '>YOUR TASKS</div>
        </div>
      </div>
    </div>
  )
}

export default navbar
