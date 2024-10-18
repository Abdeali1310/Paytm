/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function WarningButton({label,to,buttonText}) {
  return (
    <div className='py-2 my-2 text-sm md:text-[15px] flex justify-center items-center'>
        <div>{label}</div>

        <Link className='pointer underline pl-1 cursor-pointer' to={to} >
            {buttonText}
        </Link>
    </div>
  )
}

export default WarningButton