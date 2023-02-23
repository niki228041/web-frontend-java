import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema } from '../schemas';
// import "toastify-js/src/toastify.css"


interface FormValues{
  email:string,
  password:string
}

const Login = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const user:any = useSelector((state:any)=>state.user);



    // const handleLoginWithGoogleSuccess=(res:any)=>{
    //   var requestLogin:IRequestToGoogleLogin = {provider:"Google",token:res.credential};

    //   dispatch(googleLogin(requestLogin));
    //   navigate("/models");
    // }

    // const handleLogin=(data:React.FormEvent<HTMLFormElement>)=>{
    //   data.preventDefault();
    //   var curentData = new FormData(data.currentTarget);
      
    //   var Email = curentData?.get("Email")?.toString()!;
    //   var Password = curentData?.get("Password")?.toString()!;

    //   var loginRequest:ILogin = {email:Email,password:Password};

    //   dispatch(login(loginRequest));
    //   navigate("/models");
    // }


    // useEffect(() => {

    //     let clientId = "1077056982647-chirn7dlqjl0ru51a94d4sjt385tc3gi.apps.googleusercontent.com";

    //     if (typeof window === "undefined" || !window.google) {
    //       return;
    //     }

    //     window.google.accounts!.id.initialize({
    //         client_id:clientId,
    //         callback: handleLoginWithGoogleSuccess,
    //     });
    //     var opts:GsiButtonConfiguration = {type:"standard",theme:"outline",size:"large"};

    //     window.google.accounts!.id.renderButton(document.getElementById("loginGoogleBtn")!,
    //       opts);
        
        
    //   }, []);




  const {handleSubmit,touched,errors,handleChange} = useFormik<FormValues>({
    initialValues: {
      email: '',
      password:'',
    },
    onSubmit: values => {
      console.log(values);
      
      // var newCategory = {email:values.email,password:values.password};
      // addCategory(newCategory);
    },
    validationSchema: loginSchema,
  });


  return (
    <>
 {/* onSubmit={handleLogin} */}
      <form onSubmit={handleSubmit}>
        <div className=' bg-[#5c5c5c] grid grid-cols-1 xl:w-[400px] sm:w-[500px] m-auto rounded-xl text-fontYellowDark p-7 mt-28 text-white'>
          <div className='rounded-full text-[35px] mb-5 m-auto'>
            Sign In
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

          <div className=' rounded-full place-content-between mb-4 max-lg:grid grid-cols-1 lg:flex '>

            <button type='submit' className=' outline-2 outline-white outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-5 hover:bg-white hover:text-black duration-150 '>Sign In</button>
            
            <button className=' outline-2 outline-white outline rounded-sm pr-3 pl-3 pt-1 pb-1 text-sx mt-3 mb-5 hover:bg-white hover:text-black duration-150 '>
                <div id="loginGoogleBtn" className=' text-black'>
                    Sign in with Google 🚀
                </div>
            </button>
            
          </div>

          <div className=' rounded-full flex place-content-between mt-4'>
            <Link to="/registration" onClick={()=>{window.scroll({top: 0, left: 0, behavior: 'smooth' })}} className='text-[15px]'>
              Create Account
            </Link>
            <Link to="/" className='text-[15px]'>
              Forget Password
            </Link>
          </div>

        </div>
      </form>

      {/* <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}
        
    </>
  )
}

export default Login;