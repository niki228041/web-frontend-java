import { Category, Product } from "../types"
import { useState } from 'react'


export const OneUnit=(data:Product,setCurrentObject:any,moreOptions:number,deleteProduct:any,navigate:any)=> {
    console.log(data.id + " || " + moreOptions);
    var img = data.imagesInBytes[0];

    return (
      <div key={data.id} className=' bg-[#5c5c5c] rounded-xl flex flex-col items-center'>
          <div className='w-full h-40 rounded-tl-xl rounded-tr-xl' style={{backgroundImage:"url(data:image/jpeg;base64,"+img+")",backgroundSize:"cover",backgroundPosition:"center"}}>
  
          </div>
          <p className='font-medium text-xl'>{data.name}</p>
          <p className=' font-normal p-2 text-xs'>{data.descriprion}</p>
          {
            moreOptions == data.id ?
            (
            <div className="flex place-content-between w-full pl-2 pr-2">
                <button onClick={()=>{deleteProduct(data.id)}} className=' outline-2 w-[80px] outline-red-300 outline rounded-sm pr-3 pl-3 text-sx ml-1 mt-3 mb-5 hover:bg-red-500 hover:text-white hover:font-bold duration-150 hover:pl-4 hover:pr-4 '>Delete</button>
                
                <button onClick={()=>{navigate("/edit-product/" + data.id)}} className=' outline-2 w-[80px] outline-orange-300 outline rounded-sm pr-3 pl-3 text-sx mt-3 mb-5 hover:bg-orange-500 hover:text-white hover:font-bold duration-150 hover:pl-4 hover:pr-4 '>Edit</button>
            </div>
            )
            :
            <button onClick={()=>{if(moreOptions != data.id){setCurrentObject(data.id)}else{setCurrentObject(-1)} }} className=' outline-2 outline-white outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-3 hover:bg-white hover:text-black duration-150 '>See More</button>

          }
      </div>
      
    )
  }