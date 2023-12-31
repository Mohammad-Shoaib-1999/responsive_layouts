import { useEffect } from "react"
import VerifyOTP from "../components/VerifyOTP/VerifyOTP"
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
const VerifyOtpPage = () => {
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector((state)=>state.user)

  useEffect(()=>{
    console.log("Login page LoginPage.jsx")

    if(isAuthenticated === true){
      navigate("/");
    }
  },[])
  return (
    <>
      <VerifyOTP/>
    </>
  )
}

export default VerifyOtpPage


