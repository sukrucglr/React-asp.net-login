
import { useState } from "react/cjs/react.development";
import React, { useEffect } from 'react'
import { Link  } from 'react-router-dom'
import useForm from '../hooks/useForm'
import lgn from "./foto/login.png";
import eye from "./foto/eye-regular.svg";
import eyes from "./foto/eye-slash-regular.svg";

import { createAPIEndpoint, ENDPOINTS } from '../api'
  import useStateContext from '../hooks/useStateContext'
  import { useNavigate } from 'react-router'
import { Email } from '@mui/icons-material';
  


const getFreshModel = () => ({
    name: '',
    email: '',
    password:'',
})
 
export default function LoginPage() {
   
  const {  setContext, resetContext } = useStateContext();
     const navigate = useNavigate()

     const {
        values,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

       useEffect(() => {
           resetContext()
       },[] )
      
     const login = e => {
         e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.participant)
          .post(values)
           .then(res => {
            setContext({ participantId: res.data.participantId })
              navigate('/home') 
              })
                 .catch(err => console.log(err))
    }
    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name !== "" ? "" : "This field is required."
        // temp.date = values.date !== "" ? "" : "This field is required."
         temp.password = values.password !== "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x === "")
    }
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return (
        <div  className='Register-header' >
            <div className=''>

            <form action="/home" className="Register-Form-head" noValidate   onSubmit={login}>
            <img className='login-lgn' src={lgn} alt="lgn" />
            <h2>Kayıt Olmak İçin</h2>
                    <label className='Register-baslik'> Mail </label>
                    <input 
                    className='Register-inputs'
                      label="Email"
                      name="email"
                      value={values.email}
                      onChange={handleInputChange}
                      variant="outlined"  
                      type={Email}
                      {...(errors.email && { error: true,  helpertext: errors.email })} />
                 <br/>

               <br/>
                <label className='Register-baslik'> İsim </label>
                    <input 
                      label="name"
                      name="name"
                      value={values.name}
                      className='Register-inputs'
                
                   onChange={handleInputChange}
                      variant="outlined"  
                      {...(errors.name && { error: true, helpertext: errors.name })}
                     />
<br/>
                    <br/>
               
                    <label className='Register-baslik'>Şifre</label>
                    <input
                    type={passwordType}
                     className='Login-inputs'
                      value={values.password}
                       onChange={handleInputChange}
                        variant="outlined" 
                         name="password"   ></input>
                   <button onClick={togglePassword} className='ssss'>
                     { passwordType==="password"?<img className='Password-eye' src={eye} /> :<img className='Password-eye' src={eyes} /> }
                     </button>
                    
       
                      
                <p className=''>
          <button   variant="contained" className='button' type="submit">Kayıt Ol</button>
                </p>
                <footer>
                

                <p><Link to="/" className='Register-link'>Anasayfaya git</Link></p>
            </footer>
            </form>

           </div>
        </div>
    )
}



