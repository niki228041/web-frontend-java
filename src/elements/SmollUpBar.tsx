import React from 'react'
import { Link } from 'react-router-dom'



const SmollUpBar=()=> {
  return (
    <div className='font-medium'>
        <div className='w-full h-20  text-black shadow-md flex flex-row items-center pl-20 pr-20  font-medium text-sm'>
            <Link to="/categorys">
                <p className='mr-10 cursor-pointer active:text-slate-700 duration-150'>Some</p>
            </Link>
            <Link to="/products">
                <p className='mr-10 cursor-pointer active:text-slate-700 duration-150'>Stuff</p>
            </Link>
        </div>
    </div>
    
  )
}

export default SmollUpBar
