import {useSelector,useDispatch} from "react-redux"
import { login,registration,postLogin} from "./user-slice";
// ,getUsers
import { useEffect } from "react";

const Login = () => {
    const dispatch = useDispatch();

    const user = useSelector((state:any)=>state.user);
    const userLoading = useSelector((state:any)=>state.user.loading);


    (user);
    
    // const handle=()=>{
    //     dispatch(login({payload:"someUsers"}));
    // }

    useEffect(()=>{
        // dispatch(getUsers())
    },[dispatch])

  return (
    <div>
        {/* <button onClick={handle}></button> */}
    </div>
  )
}

export default Login