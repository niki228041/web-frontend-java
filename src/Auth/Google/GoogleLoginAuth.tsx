import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import GoogleAuth from './GoogleAuth'

export const GoogleLoginAuth=()=> {
    
  return (
    <GoogleReCaptchaProvider reCaptchaKey='6LfU4kAlAAAAAPWZ-zIWGu_u8S2vepnPL4cWriUY'>
        <GoogleAuth/>
    </GoogleReCaptchaProvider>
  )
}
