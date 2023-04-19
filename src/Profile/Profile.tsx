import React, { useState } from 'react'
import parseJwt, { GetAccessToken } from '../api/jwtDecodeToken'
import { UserToken } from './types';
import classNames from 'classnames';
import { useAddAvatarMutation } from '../features/apiUserSlice';



const Profile = ()=> {

  var user:UserToken = parseJwt(GetAccessToken());
  console.log(user.id);

  const [bigerIcon,setBigerIcon] = useState(true);

  const [addAvatar,{}] = useAddAvatarMutation();

  console.log(bigerIcon);

  const changeAvatar=(file:any)=>{

    console.log(file);
    const formData = new FormData();

    formData.append("user_id", user.id.toString());
    formData.append("image", file);

    addAvatar(formData).then((answer:any)=>console.log(answer));
  }
  

  return (
    <>
        <div className=' bg-slate-200 w-full flex p-3'>

            

            <div className={` ${bigerIcon ? "w-20 rounded-full h-20  " : "w-40 rounded-xl h-40 "}` + " bg-slate-800 self-center mr-5 transition-all cursor-pointer flex justify-end duration-1000"} onClick={()=>setBigerIcon((val:any)=>!val)}>
              <div>
                <input type='file' id='ava' name='ava' hidden onChange={(e:any)=>{changeAvatar(e.target.files[0])}} />
                <label htmlFor='ava' className='bg-red-100 pl-2 pr-2 rounded-full flex h-7 w-7 pointer hover:bg-slate-300 cursor-pointer'>
                    +
                </label>
              </div>
            </div>

            

            
            
            
            <div className=' text-xl font-medium '>
                Hi, {user.email}
                <br/>
                <div className='flex mt-1'>
                {user.roles.map((role: string,i:any) => (
                  <div 
                  key={i}
                    className={`
                       ${role === "user" ? "bg-green-500 " : ""} ${
                      role === "admin" ? "bg-red-500 " : ""
                    }` + 
                    " pl-3 pr-3 rounded-full text-[14px] flex font-semibold cursor-pointer"}
                  >
                    {role}
                  </div>
                ))}
                </div>
                
            </div>
        </div>
        Profile
    </>
  )
}

export default Profile
