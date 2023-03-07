import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function LandingPage() {
    return (
        <div> <NavBar/>
        <header className='Landing-header' >
            
        
            <div className="Landing-header-div">
                <br/>
            <h1 className="Landing-h1">Merhaba! </h1>
            <h5>Giriş yapmak için tıklayınız. </h5>
                <Link to="/login">
                    <button className="Landing-button">Giriş yap</button>
                </Link>
              

            
            </div>
           
        </header>
        </div>
        
    )
}

