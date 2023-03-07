
import React, { useEffect } from 'react'
import { Link  } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { useState } from "react/cjs/react.development";

 import './pages.css'
import { createAPIEndpoint, ENDPOINTS } from '../api'
  import useStateContext from '../hooks/useStateContext'
  import { useNavigate } from 'react-router'
import lgn from "./foto/login.png";

import eye from "./foto/eye-regular.svg";
import eyes from "./foto/eye-slash-regular.svg";

const getFreshModel = () => ({
    name: '',
    email: '',
    password:'',
})

   
export default function LoginPage() {
    
   
    const { context, setContext, resetContext } = useStateContext();
    const navigate = useNavigate()

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    useEffect(() => {
        resetContext()
    }, [])

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
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email doğru formatta değil."
        temp.password = values.password !== "" ? "" : "Bu kısım boş geçilemez sadece sayı.."
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
        
        <div className="Login-header">
       
            <div className=''>
                
            <form action="/home" className="Login-Form-head" noValidate onSubmit={login}>
            <img className='login-lgn' src={lgn} alt="lgn" />
                <h2>Giriş Yapmak İçin</h2>
                    <label className='Login-baslik'> Mail</label>
                    <input 
                     className='Login-inputs'
                      label="email"
                      name="email"
                      value={values.email}
                      onChange={handleInputChange}
                      variant="outlined"  
                      {...(errors.email && {  helpertext: errors.email })} />
              
<br/>
<br/>

                    <label className='Login-baslik'>Şifre</label>
                    {/* <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" className='Register-inputs1' /> */}
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
                         <br/>
<Link to="/forget-password" className="Login-link"><label >Şifeni mi unuttun??</label></Link>
                    
                <p >
          <button  className='button'  name="password"  type="submit">Giriş Yap</button>
                </p>
                <footer>
                <p >Hesabın yok mu?<Link to="/register" className='Login-link'>
                    Hesap oluştur.</Link></p>

                <p ><Link to="/" className='Login-link'>
                    Anasayfaya git</Link></p>
            </footer>
            </form>

           
     </div>
        </div>
    )
}

