import  { useEffect } from 'react'
import Register from "../components/Register/Register"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const RegisterPage = () => {
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector((state)=>state.user)

  useEffect(()=>{
    console.log("Effect of navigate signupPage.jsz ")

    if(isAuthenticated === true){
      navigate("/")
    }
  },[])
  return (
    <>
      <Register/>
    </>
  )
}

export default RegisterPage


