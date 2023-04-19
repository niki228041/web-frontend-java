import { Link } from "react-router-dom";
import { Category, Product } from "../types"
import { useState } from 'react'


export const OneUnit=(data:Product,navigate:any)=> {
    var img = data.imagesInBytes[0];

    return (
      <div key={data.id} className='rounded-xl flex flex-col items-center text-black'>
          <div  onClick={()=>navigate("product/" + data.id)} className='w-full h-40 rounded-xl shadow-black flex justify-center hover:shadow-xl' style={{backgroundImage:"url(data:image/jpeg;base64,"+img+")",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
          
          </div>

          <p className='font-medium text-[14px] mt-3'>{data.name}</p>
          <p className=' font-normal p-1 text-[12px] overflow-hidden h-[58px]' dangerouslySetInnerHTML={{ __html: data.descriprion }} ></p>

          {/* <Link to={"product/" + data.id}  className=' outline-2 outline-green-600 outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-xs mt-3 mb-3 hover:bg-green-600 hover:text-white duration-150 '>See More</Link> */}

          {/* onClick={()=>{navigate("product/" + data.id)}} */}
      </div>
      
    )
  }