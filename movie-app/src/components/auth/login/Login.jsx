import React from 'react';
import CustomButton from "../../../reuseable/CustomButton";
import style from "./login.module.css"
import { useState } from 'react'
import {Link} from 'react-router'

const Login = () => {
    const loginDetails = {
        email: "",
        password: ""
    };

    const [loginData, setLoginData] = useState(loginDetails);

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setLoginData((prev)=>({...prev, [name]: value.trim()}))
    }

    return (
        <>

        <div className={style.container}> 
            <div>
                <input 
                    type='text' 
                    placeholder='Email Address' 
                    className={style.input} 
                    onChange={handleChange}
                    required 
                />
              
            </div>
            <div>
                <input 
                    type='text' 
                    placeholder='Password' 
                    className={style.input}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Link to="/signup">signUp</Link>
                <CustomButton text="login"/>
            </div>
        </div>
        </>
    )
}

export default Login