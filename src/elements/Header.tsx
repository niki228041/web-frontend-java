import React from 'react'
import { Link } from 'react-router-dom'



const Header=()=> {
  return (
    <div className=' font-medium'>
        <div className='w-full h-9 bg-black text-white flex flex-row items-center justify-end font-medium text-sm'>
            <Link to="/categorys">
                <p className='mr-6 cursor-pointer active:text-slate-700 duration-150'>Category</p>
            </Link>
            <Link to="/products">
                <p className='mr-6 cursor-pointer active:text-slate-700 duration-150'>Products</p>
            </Link>
            <Link to="/log-in">
                <p className='mr-6 cursor-pointer active:text-slate-700 duration-150'>Log In / Sign In</p>
            </Link>
        </div>
    </div>
    
  )
}

export default Header
