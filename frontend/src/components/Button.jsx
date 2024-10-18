/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({title,onClick}) {
  return (
    <div className='cursor-pointer bg-black rounded-md h-10 flex text-md md:text-lg  justify-center items-center text-white px-4 w-full text-center'>
        <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button