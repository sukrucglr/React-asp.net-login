import React from 'react'
import { Link } from 'react-router-dom'
import NavBar  from './NavBar'
import bg from './react-2.svg';

export default function HomePage() {
    return (
<>
        <div><NavBar/></div>
    <div className='homes-header'>
    
    {/* <img src={bg} className='homes-logo'></img> */}
<div className='home-text'>
    <h2>    $Limited çalışan IT birimine hoş geldiniz..</h2>
    <h5> Gelişmekte olan projede kullanılabilir projeler menüde eklidir.


    </h5>
    </div>






 {/* <h1 className="Landing-p">Çalışan Bilgisi eklemek için </h1>
            <p/>
            <p/>
            <p/>
             <Link to="AnaPage">
                <button className="Login-buton">Buraya Tıklayınız</button>
                
            </Link> 
         <h1 className="Landing-p"> Fatura kesmek için </h1>
         <p/>
         <p/>
         <p/>
          <Link to="quiz">
             <button className="Login-buton">Buraya Tıklayınız</button>
             
         </Link>   */}
         
</div>
         
           
</>
    )
}
