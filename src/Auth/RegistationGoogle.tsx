import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Login from './Login'
import Registration from './Registration'

export const Reg_Google=()=> {
    
  return (
    <GoogleReCaptchaProvider reCaptchaKey='6LfU4kAlAAAAAPWZ-zIWGu_u8S2vepnPL4cWriUY'>
        <Registration/>
    </GoogleReCaptchaProvider>
  )
}
