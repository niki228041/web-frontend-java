import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Login from './Login'

export const Login_Google=()=> {
    
  return (
    <GoogleReCaptchaProvider reCaptchaKey='6LfU4kAlAAAAAPWZ-zIWGu_u8S2vepnPL4cWriUY'>
        <Login/>
    </GoogleReCaptchaProvider>
  )
}
