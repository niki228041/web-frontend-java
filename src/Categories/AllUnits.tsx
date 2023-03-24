import React, { useState } from 'react'
import temp from '../images/temp.png'
import { useAppSelector } from '../app/hooks'
import {useDeleteCategoryMutation, useGetCategoriesQuery} from '../features/apiCategorySlice'
import { boolean } from 'yup'
import { Category } from '../types'
import { OneUnit } from './OneUnit'
import { useNavigate } from 'react-router-dom'
import OperationBar from '../elements/OperationBar'



type CategoryList = Category[];

const AllUnits=()=> {
  // const getCategories = useAppSelector((state)=>state);
  const {data,isSuccess,isLoading,error}:{data:CategoryList,isSuccess:any,isLoading:Boolean,error:any} = useGetCategoriesQuery();
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

  if (isLoading) return <>{OperationBar("Create Category","create-category")}<div>Loading...</div></>;
  if (error) return <>{OperationBar("Create Category","create-category")}<div>Empty or can`t connect to server</div></>;

  return (
    <>
    {OperationBar("Create Category","create-category")}
    {isSuccess ? 
    <div className='flex justify-center w-full text-white'>
        <div className=' grid lg:grid-cols-6 gap-x-16 gap-y-16 sm:grid-cols-3 mt-11 w-full lg:ml-48 lg:mr-48 ml-10 mr-10'>

        {data.map((a:any)=>OneUnit(a,handleMoreOptionsClick,currentObject,handleDelete,navigate))}
            
            
        </div>
    </div>
    :
    <div className="w-full h-full m-auto absolute p-0 flex items-center justify-center ">
      <div className="w-16 h-16 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
    }
    </>
  )
}

export default AllUnits
