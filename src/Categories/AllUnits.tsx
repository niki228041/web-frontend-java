import React from 'react'
import temp from '../images/temp.png'
import { useAppSelector } from '../app/hooks'
import {useGetCategoriesQuery} from '../features/apiCategorySlice'

const OneUnit=(data:Category)=> {
  return (
    <div key={data.id} className=' bg-[#5c5c5c] rounded-xl flex flex-col items-center'>
        <div className='w-full h-40 rounded-tl-xl rounded-tr-xl' style={{backgroundImage:"url("+temp+")",backgroundSize:"cover",backgroundPosition:"center"}}>

        </div>
        <p className='font-medium text-xl'>{data.name}</p>
        <p className=' font-normal p-2 text-xs'>{data.description}</p>
        <button className=' outline-2 outline-white outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-5 hover:bg-white hover:text-black duration-150 '>See More</button>
    </div>
    
  )
}

type Category = {
  name: string;
  description: string;
  id: number;
};

type CategoryList = Category[];

const AllUnits=()=> {
  // const getCategories = useAppSelector((state)=>state);
  const {data,isSuccess}:{data:CategoryList,isSuccess:any} = useGetCategoriesQuery();
  // :{data:GetCategoriesQueryData,isSuccess:any}
  
  return (
    <div className='flex justify-center w-full text-white'>
        <div className=' grid lg:grid-cols-6 gap-x-16 gap-y-16 sm:grid-cols-3 mt-11 w-full ml-48 mr-48'>

        {isSuccess ? data.map((a:any)=>OneUnit(a)) : ""}
            
            
        </div>
    </div>
    
  )
}

export default AllUnits
