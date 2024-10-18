/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Subheading({title}) {
  return (
    <div className='text-lg mx-2 px-3 md:text-xl text-zinc-400 text-center font-medium pt-3 mt-1 mb-7'>
        {title}
    </div>
  )
}

export default Subheading