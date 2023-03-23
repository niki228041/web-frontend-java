import React, { useState } from 'react'
import temp from '../images/temp.png'
import { useAppSelector } from '../app/hooks'
import { boolean } from 'yup'
import { Product } from '../types'
import { OneUnit } from './OneUnit'
import { useNavigate } from 'react-router-dom'
import { useDeleteProductByIdMutation, useGetProductsQuery } from '../features/apiProductSlice'
import OperationBar from '../elements/OperationBar'



type ProductList = Product[];

const AllProducts = ()=> {
  // const getCategories = useAppSelector((state)=>state);
  const {data,isSuccess}:{data:ProductList,isSuccess:any} = useGetProductsQuery();


  // :{data:GetCategoriesQueryData,isSuccess:any}

  const [currentObject, setCurrentObject] = useState(Number);

//   const [deleteProduct] = useDeleteCategoryMutation();

  const navigate = useNavigate();
  
  const handleDelete = async (id:Number) => {
    // await deleteCategory(id);
    console.log('Product deleted successfully!');
  };

  const handleMoreOptionsClick = (objectId: number) => {
    setCurrentObject(prevObject => prevObject === objectId ? -1 : objectId);
  }

  return (
    <>
    {OperationBar("Create Product","create-product")}
    <div className='flex justify-center w-full text-white'>
        <div className=' grid lg:grid-cols-6 gap-x-16 gap-y-16 sm:grid-cols-3 mt-11 w-full lg:ml-48 lg:mr-48 ml-10 mr-10'>

        {isSuccess ? data.map((a:any)=>OneUnit(a,navigate)) : ""}
            
            
        </div>
    </div>
    </>
  )
}

export default AllProducts
