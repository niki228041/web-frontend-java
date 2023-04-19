import { Category } from "../types"
import { useState } from 'react'


export const OneUnit=(data:Category,setCurrentObject:any,moreOptions:number,deleteCategory:any,navigate:any)=> {
    return (
      <div key={data.id} className=' rounded-xl flex flex-col items-center text-black'>
          <div className='w-full h-40 rounded-xl ' style={{backgroundImage:"url(data:image/jpeg;base64,"+data.photo_name+")",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
  
          </div>
          <p className='font-medium text-xs mt-4'>{data.name}</p>
          <p className=' font-normal p-2 text-xs  h-[39px]  overflow-hidden '>{data.description}</p>
          {
            moreOptions == data.id ?
            (
            <div className="flex place-content-between w-full pl-2 pr-2">
                <button onClick={()=>{deleteCategory(data.id)}} className=' outline-2 w-[80px] outline-red-300 outline rounded-sm pr-3 pl-3 text-xs ml-1 mt-3 mb-5 hover:bg-red-500 hover:text-white  duration-150'>Delete</button>
                
                <button onClick={()=>{navigate("/edit-category/" + data.id)}} className=' outline-2 w-[80px] outline-orange-300 outline rounded-sm pr-3 pl-3 text-xs mt-3 mb-5 hover:bg-orange-500 hover:text-white  duration-150'>Edit</button>
            </div>
            )
            :
            <button onClick={()=>{if(moreOptions != data.id){setCurrentObject(data.id)}else{setCurrentObject(-1)} }} className=' outline-2 outline-green-600 outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-xs mt-3 mb-3 hover:bg-green-600 hover:text-white duration-150 '>See More</button>

          }
      </div>
      
    )
  }