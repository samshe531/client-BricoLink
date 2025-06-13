import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {toast, ToastContainer} from 'react-toastify'
import { clearError } from '../../JS/actions/auth.action'
const ErrorToast = ({errors}) => {
    const dispatch = useDispatch();
    useEffect(() => {
      if(Array.isArray(errors)) {
        errors.map((error,i)=> 
            toast.error(error.msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            theme: "dark",
            toastId:`${error.msg}-${Date.now()}`//pour avoir un id unique
        })
    );
    const timer = setTimeout (() => {dispatch(clearError)},3000 )
            return () => clearTimeout(timer);
}
    
     
    }, [errors, dispatch])
    

    
  return (
    <div>
        <ToastContainer limit={3} />
    </div>
  )
}

export default ErrorToast