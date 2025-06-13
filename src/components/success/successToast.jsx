import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {toast, ToastContainer} from 'react-toastify'
import { clearSuccess } from '../../JS/actions/auth.action'
const SucessToast = ({success}) => {
    const dispatch = useDispatch();
    useEffect(() => {
      if(Array.isArray(success)) {
        success.map((succes,i)=> 
            toast.success(succes.msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            theme: "dark",
            toastId:`${succes.msg}-${Date.now()}`//pour avoir un id unique
        })
    );
    const timer = setTimeout (() => {dispatch(clearSuccess)},3000 )
            return () => clearTimeout(timer);
}
    
     
    }, [success, dispatch])
    

    
  return (
    <div>
        <ToastContainer limit={3} />
    </div>
  )
}

export default SucessToast