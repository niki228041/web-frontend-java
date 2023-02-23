import React from 'react'
import temp from '../images/temp.png'
import { Formik ,Form , Field, useFormik} from 'formik'
import * as yup from 'yup'
import { useAddCategoryMutation } from '../features/apiCategorySlice'
import { basicSchema } from '../schemas'
import { useNavigate } from 'react-router-dom'
  
interface FormValues{
  name:string,
  description:string
}



const CreateCategory=()=> {

  
  const [addCategory,{}] = useAddCategoryMutation();
  const navigate = useNavigate();
  

  const {handleSubmit,touched,errors,handleChange} = useFormik<FormValues>({
    initialValues: {
      name: '',
      description:'',
    },
    onSubmit: values => {
      console.log(values);
      
      var newCategory = {name:values.name,description:values.description};
      addCategory(newCategory);
      navigate("/home");
    },
    validationSchema: basicSchema,
  });

  console.log(errors);

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
            <button type='submit' className=' outline-2 outline-white outline w-full rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-5 hover:bg-white hover:text-black duration-150 '>Create</button>
        </div>
      </div>
    </form>

  )
}

export default CreateCategory
