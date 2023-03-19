import { Link } from "react-router-dom";
import { Category, Product } from "../types"
import { useState } from 'react'


export const OneUnit=(data:Product,navigate:any)=> {
    var img = data.imagesInBytes[0];

    return (
      <div key={data.id} className='rounded-xl flex flex-col items-center'>
          <div className='w-full h-40 rounded-xl shadow-black flex justify-center hover:bg-slate-100' style={{backgroundImage:"url(data:image/jpeg;base64,"+img+")",backgroundSize:"cover",backgroundPosition:"center"}}>
          
          </div>

          <p className='font-medium text-[14px] mt-3'>{data.name}</p>
          <p className=' font-normal p-1 text-[12px]' dangerouslySetInnerHTML={{ __html: data.descriprion }} ></p>

          <Link to={"product/" + data.id}  className=' outline-2 outline-white outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-xs mt-3 mb-3 hover:bg-white hover:text-black duration-150 '>See More</Link>

          {/* onClick={()=>{navigate("product/" + data.id)}} */}
      </div>
      
    )
  }