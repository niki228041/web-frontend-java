import React, { useState } from 'react'
import temp from '../images/temp.png'
import { useAppSelector } from '../app/hooks'
import {useDeleteCategoryMutation, useGetCategoriesQuery} from '../features/apiCategorySlice'
import { boolean } from 'yup'
import { Category } from '../types'
import { OneUnit } from './OneUnit'
import { useNavigate } from 'react-router-dom'



type CategoryList = Category[];

const AllUnits=()=> {
  // const getCategories = useAppSelector((state)=>state);
  const {data,isSuccess}:{data:CategoryList,isSuccess:any} = useGetCategoriesQuery();
  // :{data:GetCategoriesQueryData,isSuccess:any}

  const [currentObject, setCurrentObject] = useState(Number);

  const [deleteCategory] = useDeleteCategoryMutation();

  const navigate = useNavigate();
  
  const handleDelete = async (id:Number) => {
    await deleteCategory(id);
    console.log('Category deleted successfully!');
  };

  const handleMoreOptionsClick = (objectId: number) => {
    setCurrentObject(prevObject => prevObject === objectId ? -1 : objectId);
  }

  return (
    <div className='flex justify-center w-full text-white'>
        <div className=' grid lg:grid-cols-6 gap-x-16 gap-y-16 sm:grid-cols-3 mt-11 w-full lg:ml-48 lg:mr-48 ml-10 mr-10'>

        {isSuccess ? data.map((a:any)=>OneUnit(a,handleMoreOptionsClick,currentObject,handleDelete,navigate)) : ""}
            
            
        </div>
    </div>
    
  )
}

export default AllUnits
