/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function Heading({title}) {
  return (
    <div className='text-2xl lg:text-3xl text-black text-center font-bold'>
        {title}
    </div>
  )
}

export default Heading