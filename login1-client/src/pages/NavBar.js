import React,{useState} from 'react'
import {NavLink} from "react-router-dom"
import bg from './react-2.svg';
export default function NavBar() {

    const [click, setClick]=useState(false);
    const handleClick= () => setClick(!click);
   
    return (
        <>
        <div className="navbar-header">
         <nav className='navbar-navs'>
            <div className='navbar-menu'>
               
                <NavLink to='//' >
                <i className="navbar-nav-logo" >
                     <img src={bg} className='navbar-logo'></img>
                   </i>
                </NavLink>
                
                <ul className='navbar-nav-menu'>
                <li className='navbar-li'>
                        <NavLink to="/" className="navbar-link" someOtherUnsedAttribute={true} activeClassName="active" onClick={handleClick} >
                          Anasayfa
                        </NavLink>
                    </li>
                    <li className='navbar-li'>
                        <NavLink to="/" className="navbar-link" someOtherUnsedAttribute={true} activeClassName="active" onClick={handleClick} >
                          Hakkında
                        </NavLink>
                    </li><li className='navbar-li' >
                        <NavLink to="/" className="navbar-link" someOtherUnsedAttribute={true} activeClassName="active" onClick={handleClick} >
                          Galeri
                        </NavLink>
                    </li>
                </ul>
              
          
            </div>
           
       
         </nav>



     </div>
     </>
    )
}
