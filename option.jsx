import React from 'react'

function Option({ index }) {
    const arr = ["CREATIVE", "DESIGN", "ANIMATION", "STRATEGY"];
  return (
    <div className=' w-full h-[7rem] border-b-2  flex justify-evenly p-4'>
        <h1 className=' text-3xl'>{arr[index]}</h1>
        <h3 className=' text-3xl p-2 h-[90%]  cursor-pointer '>+</h3>
    </div>
  )
}

export default Option