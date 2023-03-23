import React from 'react'
import temp from '../images/temp.png'
import { Link } from 'react-router-dom'


const OperationBar=(nameOfCreate:string,pathOfCreate:string)=> {
  return (
    <div className='flex justify-center flex-col text-white bg-black pl-48 pr-48'>
        <p>
            In this section you can chose operation with category
        </p>
        <div className='flex'>
            <Link to={"/"+pathOfCreate}>
                <button className='mr-10 outline-2 outline-white outline rounded-sm pr-6 pl-6 pt-1 pb-1 text-sx mt-2 mb-4 hover:bg-white hover:text-black duration-150 '>{nameOfCreate}</button>
            </Link>
        </div>
    </div>
    
  )
}

export default OperationBar