import React from 'react'
import temp from '../images/temp.png'
import { Formik ,Form , Field, useFormik} from 'formik'
import * as yup from 'yup'
import { useAddCategoryMutation } from '../features/apiCategorySlice'
import { basicSchema } from '../schemas'
import { useNavigate } from 'react-router-dom'
import { FormValues } from '../types'
import { toBase64 } from '../WorkWithFiles/CovertToBase64'



const CreateCategory=()=> {

  
  const [addCategory,{}] = useAddCategoryMutation();
  const navigate = useNavigate();
  

  const {handleSubmit,touched,errors,handleChange,setFieldValue} = useFormik<FormValues>({
    initialValues: {
      name: '',
      description:'',
      photo:null
    },
    onSubmit: values => {
      console.log(values);
      console.log(values.photo);

      var fileBytes = toBase64(values.photo!);

      fileBytes.then((res:any)=>{
        var bytesToRequest = res;
        var newCategory = {
          name:values.name,
          description:values.description,
          photo:bytesToRequest
        };
          
        addCategory(newCategory);
        console.log(newCategory);
      })

      
      
      navigate("/categorys");
    },
    validationSchema: basicSchema,
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
                <span className=' text-[16px] mb-2'>Photo</span>
                <input type='file' onChange={(event)=>{setFieldValue("photo",event.target.files?.item(0))}} name='photo' id="photo" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black hidden' />
                <label htmlFor='photo' className='text-xs outline-none rounded-[4px] pl-3 pr-3 text-black cursor-pointer bg-white flex justify-center content-center mt-auto mb-auto pt-2 pb-2'>
                  <p>Add Photo</p>
                </label>

                {errors.photo && touched.photo ? <div className=' text-[13px] text-red-500'>{errors.photo.toString()}</div>  : ""}
            </div>
            <button type='submit' className=' outline-2 outline-white outline w-full rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-5 hover:bg-white hover:text-black duration-150 '>Create</button>
        </div>
      </div>
    </form>

  )
}

export default CreateCategory
