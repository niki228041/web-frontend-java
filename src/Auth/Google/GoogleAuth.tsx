import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginGoogleUserMutation } from "../../features/apiUserSlice";
import { SetAccessToken } from "../../api/jwtDecodeToken";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface AuthWithGoogle{
  token:string
}

 const GoogleAuth  = () => {
    const navigator = useNavigate();
    const [loginGoogle,{}] = useLoginGoogleUserMutation();
    // const { executeRecaptcha } = useGoogleReCaptcha();

    const handleGoogleLogin = async (resp: any) => {

        const token = resp.credential;
        // console.log("Google resp", token);

        // if(!executeRecaptcha)
        // return;
        
        // //Перевірка чи пройшов перевірку гугл, користувач, чи не є він бот  
        // var reCaptchaToken = await executeRecaptcha();

        // reCaptchaToken=resp;
        var request:AuthWithGoogle ={token:token}; 

        console.log(request);

        

        loginGoogle(request).then((resp:any)=>{
          console.log(resp.data.token);

          console.log(resp.data.token);
          SetAccessToken(resp.data.token);
        });

        navigator("/products");
                  
    }

    useEffect(() => {
        //global google

        let clientId = "71849370268-o9mp92t24hr5i0hvkur1e1b6og3dpbmu.apps.googleusercontent.com";

        if (typeof window === "undefined" || !window.google) {
          return;
        }

        

        window.google.accounts!.id.initialize({
            client_id:clientId,
            callback: handleGoogleLogin,
        });
        var opts:GsiButtonConfiguration = {type:"standard",theme:"outline",size:"large"};

        window.google.accounts!.id.renderButton(document.getElementById("loginGoogleBtn")!,
          opts);
        
        
      }, []);

    return (
      <div id="loginGoogleBtn" className="rounded-sm text-sx mt-3 mb-5 hover:text-black duration-150 "></div>
    );
}
export default GoogleAuth;