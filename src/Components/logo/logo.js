import React from'react';
import './logo.css';
import {Link} from'react-router-dom';

function Logo(){

    return (
        
            <div className='logoDiv'> 
            <Link to='/'>
                <img className='logo' alt='Logo which reads LMB Design' src='../images/logo_white.webp'></img>
               </Link>
            </div>
       
    )
}

export default Logo;
