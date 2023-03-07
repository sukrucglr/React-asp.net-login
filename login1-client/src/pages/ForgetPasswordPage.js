import React from 'react'
import { Link } from 'react-router-dom'

// import '../pages'

export default function ForgetPasswordPage() {
    return (
        <div className="Password-head">
            <form className='Password-Form-head' action="/login">
                
            <h2 className=''>Şifrenizi sıfırlayın</h2>
            <h5 className=''>E-posta adresinizi girin, size yeni bir şifre gönderelim</h5>
                
                    <label className='Password-baslik' >Mail</label>
                    <input className='Password-input' placeholder="E posta adresi" type="email" name="email" required />
                
                <br/>
                <br/>
                    <button className='button' id="sub_btn" type="submit">Gönder</button>
                
                <br/>
                <p >İlk kayıt mısın?<Link to="/register"  className='Register-link'>Hesap oluştur</Link>.</p>
                <p ><Link to="/" className='Register-link' >Ana sayfaya geri dön</Link>.</p>
         
            </form>
            
        </div>
    )
}

