import React from 'react'
import temp from '../images/temp.png'
import { Formik ,Form , Field, useFormik} from 'formik'
import * as yup from 'yup'
import { useAddCategoryMutation, useGetCategoriesQuery } from '../features/apiCategorySlice'
import { basicSchema, basicSchemaProductCreate } from '../schemas'
import { useNavigate } from 'react-router-dom'
import { Category, FormProductCreate, FormValues, ProductCreate } from '../types'
import { toBase64 } from '../WorkWithFiles/CovertToBase64'
import { useAddProductMutation } from '../features/apiProductSlice'



const CreateProduct=()=> {

  type CategoryList = Category[];

  
  const [addProduct,{}] = useAddProductMutation();

  const {data:categorys,isSuccess}:{data:CategoryList,isSuccess:any} = useGetCategoriesQuery();


  const navigate = useNavigate();
  

  const {handleSubmit,touched,errors,handleChange,setFieldValue} = useFormik<FormProductCreate>({
    initialValues: {
      name: '',
      description:'',
      photos: [],
      category_id:0,
      price:0,
    },
    onSubmit: values => {
      console.log(values.category_id);
      console.log(values.photos);

      let category_id = values.category_id != 0 ? values.category_id : categorys[0].id; 

      // var fileBytes = toBase64(values.photos!);

      // fileBytes.then((res:any)=>{
        // var bytesToRequest = res;
      


      var files = values.photos!;

      let file_array:Array<File> = [];

      for(var i =0;i<files.length;i++)
      {
        file_array.push(files[i]);
      }


      var newProduct = {
        name:values.name,
        descriprion:values.description,
        price: Number.parseInt(values.price.toString()),
        category_id: Number.parseInt(category_id.toString())
      };

      const formData = new FormData();
      Object.entries(newProduct).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      //formData.append('images', files[0]);

      for(let i = 0; i < file_array.length; i++) {
        formData.append('images', file_array[i]);
      }

      console.log(newProduct);

      try{
        addProduct(formData);
      }
      catch(e:any)
      {
        console.log(e);
      }      
      
      navigate("/products");
    },
    validationSchema: basicSchemaProductCreate,
  });


  

  return (

    <form onSubmit={handleSubmit}>

      <div className='flex justify-center w-full text-white'>
        <div className=' bg-[#5c5c5c] mt-28 p-3 rounded-xl'>
            <div className=' rounded-full flex mb-4 w-full flex-col'>
                <span className=' text-[16px] mb-2'>Name</span>
                <input onChange={handleChange}  name='name' id="name" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black ' />
                {errors.name && touched.name ? <div className=' text-[13px] text-red-500'>{errors.name}</div>  : ""}
            </div>
            
            <div className=' rounded-full flex mb-4 w-full flex-col'>
                <span className=' text-[16px] mb-2'>Description</span>
                <input onChange={handleChange} name='description' id="description" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black ' />
                {errors.description && touched.description ? <div className=' text-[13px] text-red-500'>{errors.description}</div>  : ""}
            </div>

            <div className=' rounded-full flex mb-4 w-full flex-col'>
                <span className=' text-[16px] mb-2'>Price</span>
                <input onChange={handleChange} name='price' id="price" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black ' />
                {errors.price && touched.price ? <div className=' text-[13px] text-red-500'>{errors.price}</div>  : ""}
            </div>

            <div className=' rounded-full flex mb-4 w-full flex-col'>
                <span className=' text-[16px] mb-2'>Price</span>

                <select onChange={handleChange}  name='category_id' id="category_id" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black ' >
                  {isSuccess ? categorys.map((category:Category) =><option key={category.id.toString()} value={category.id.toString()} >{category.name}</option>) : ""}
                  
                </select>
                {errors.category_id && touched.category_id ? <div className=' text-[13px] text-red-500'>{errors.category_id}</div>  : ""}
            </div>

            <div className=' rounded-full flex mb-4 w-full flex-col'>
                <span className=' text-[16px] mb-2'>Photo</span>

                <input type='file' multiple onChange={(event)=>{setFieldValue("photos",event.target.files)}} name='photos' id="photos" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black hidden' />
                <label htmlFor='photos' className='text-xs outline-none rounded-[4px] pl-3 pr-3 text-black cursor-pointer bg-white flex justify-center content-center mt-auto mb-auto pt-2 pb-2'>
                  <p>Add Photo</p>
                </label>

                {errors.photos && touched.photos ? <div className=' text-[13px] text-red-500'>{errors.photos.toString()}</div>  : ""}
            </div>
            <button type='submit' className=' outline-2 outline-white outline w-full rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-5 hover:bg-white hover:text-black duration-150 '>Create</button>
        </div>
      </div>
    </form>

  )
}

export default CreateProduct
