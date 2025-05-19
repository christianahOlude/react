import React from 'react'
import { useState } from 'react'
import style from './signUp.module.css'
import CustomButton from "../../../reuseable/CustomButton"
import { useSignUpMutation } from '../../../service/userAuthApi'
import { Link, useNavigate } from 'react-router'
 
const SignUp =()=>{

  const navigate = useNavigate()

  const userDetails = {
    userName:"",
    emailAddress: "",
    password: ""
  };

  const [userData, setUserData] = useState(userDetails);
  
  const [signUp, {isLoading, isError}] = useSignUpMutation();

  const handleInput = (e)=>{
    const {name, value} = e.target;

    console.log(value)
    setUserData((prev)=>({...prev, [name]: value.trim()}))
  }
  console.log(userData);

  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      const response = await signUp(userData).unwrap();
      if(response.status==200){
        navigate("/login")
      }
    }catch(error){
      console.log(error);
    }
  }


    return (
      <>
      
        <div className={style.container}> 
          <form onSubmit={submitHandler}>
          <div>
              <input 
                name='userName' 
                placeholder='UserName' 
                className={style.input} 
                onChange={handleInput}
                required
              />
          </div>
          <div>
              <input 
                name='emailAddress' 
                placeholder='Email Address' 
                className={style.input} 
                onChange={handleInput}
                required
              />
          </div>
          <div>
              <input 
                name ='password' 
                type='password'
                placeholder='Password' 
                className={style.input} 
                onChange={handleInput}
                required
              />
          </div>
          <div>
              <Link to="/login">login</Link>
              <CustomButton text="signup"/>
          </div>
          </form>
        </div>
        
      </>
    )
}

  export default SignUp