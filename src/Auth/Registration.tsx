import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema, regSchema } from '../schemas';
import { useLoginUserMutation, useRegisterUserMutation } from '../features/apiUserSlice';
// import "toastify-js/src/toastify.css"
import { SetAccessToken } from '../api/jwtDecodeToken';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import axiosInstance from '../features/TokenTry';


interface FormValues{
  email:string,
  password:string,
  reCaptchaToken:string
  password_repeat:string,
  first_name:string,
  last_name:string
}

interface IRegistration{
  email:string,
  password:string,
  reCaptchaToken:string,
  firstname:string,
  lastname:string
}


const Registration = () => {

  const [userRegistation,{}] = useRegisterUserMutation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const navigate = useNavigate();

  // // делаем POST запрос
  // axiosInstance.post('/api/products/getProductById',{id:3})
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(error => {
  //   console.error(error);
  // });


  const {handleSubmit,touched,errors,handleChange} = useFormik<FormValues>({
    initialValues: {
      email: '',
      password:'',
      reCaptchaToken:'',
      last_name:'',
      first_name:'',
      password_repeat:''
    },
    onSubmit:async values => {

      if(!executeRecaptcha)
        return;
      //Перевірка чи пройшов перевірку гугл, користувач, чи не є він бот  
      values.reCaptchaToken=await executeRecaptcha();

      const user:IRegistration = {
        email:values.email,
        password:values.password,
        reCaptchaToken:values.reCaptchaToken,
        firstname:values.first_name,
        lastname:values.last_name
      };

      console.log(user);

      userRegistation(user).then((response:any)=>{
        console.log(response.data.token);
        SetAccessToken(response.data.token);
        navigate("/products");
      });
    },
    validationSchema: regSchema,
  });




  return (
 
      
      <form onSubmit={handleSubmit}>
        <div className=' bg-[#5c5c5c] grid grid-cols-1 xl:w-[400px] sm:w-[500px] m-auto rounded-xl text-fontYellowDark p-7 mt-28 text-white'>
          <div className='rounded-full text-[35px] mb-5 m-auto'>
            Sign Up
          </div>

          <div className=' rounded-full flex flex-col mb-4'>
            <span className=' text-[14px] mb-2'>First Name</span>
            <input onChange={handleChange}  name='first_name' id="first_name" type="text" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black' />
            {errors.first_name && touched.first_name ? <div className=' text-[13px] text-red-500'>{errors.first_name}</div>  : ""}
          </div>

          <div className=' rounded-full flex flex-col mb-4'>
            <span className=' text-[14px] mb-2'>Last Name</span>
            <input onChange={handleChange}  name='last_name' id="last_name" type="text" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black' />
            {errors.last_name && touched.last_name ? <div className=' text-[13px] text-red-500'>{errors.last_name}</div>  : ""}
          </div>

          <div className=' rounded-full flex flex-col mb-4'>
            <span className=' text-[14px] mb-2'>Email</span>
            <input onChange={handleChange}  name='email' id="email" type="email" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black' />
            {errors.email && touched.email ? <div className=' text-[13px] text-red-500'>{errors.email}</div>  : ""}
          </div>

          <div className=' rounded-full flex flex-col mb-4'>
            <span className=' text-[14px] mb-2'>Password</span>
            <input onChange={handleChange}  name='password' id="password" type="password" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black' />
            {errors.password && touched.password ? <div className=' text-[13px] text-red-500'>{errors.password}</div>  : ""}
          </div>

          <div className=' rounded-full flex flex-col mb-4'>
            <span className=' text-[14px] mb-2'>Password again</span>
            <input onChange={handleChange}  name='password_repeat' id="password_repeat" type="password" className='text-xl outline-none rounded-[4px] pl-3 pr-3 text-black' />
            {errors.password_repeat && touched.password_repeat ? <div className=' text-[13px] text-red-500'>{errors.password_repeat}</div>  : ""}
          </div>

          <div className=' rounded-full place-content-between mb-4 max-lg:grid grid-cols-1 lg:flex '>

            <button type='submit' className=' outline-2 outline-white outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-5 hover:bg-white hover:text-black duration-150 '>Sign In</button>
            
            <button className=' outline-2 outline-white outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-5 hover:bg-white hover:text-black duration-150 '>
                <div id="loginGoogleBtn" className=' text-black'>
                    Sign in with Google 🚀
                </div>
            </button>
            
          </div>

          <div className=' rounded-full flex place-content-between mt-4'>
            <Link to="/log-in" onClick={()=>{window.scroll({top: 0, left: 0, behavior: 'smooth' })}} className='text-[15px]'>
              I have an Account
            </Link>
            <Link to="/" className='text-[15px]'>
              Forget Password
            </Link>
          </div>

        </div>
      </form>

      
        
  )
}

export default Registration;