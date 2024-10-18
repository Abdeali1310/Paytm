/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Inputbox({onChange,type,name,label,placeholder}) {
  return (
    <div className='mx-5 my-3'>
        <label className='font-medium text-start'>{label} : </label><br />
        <input className='p-2 rounded-lg w-full mt-2' onChange={onChange} type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default Inputbox