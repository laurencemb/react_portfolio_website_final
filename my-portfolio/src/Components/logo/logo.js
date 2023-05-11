import React, {Fragment} from'react';
import './logo.css';
import {Link} from'react-router-dom';

function Logo(){

    return (
        <Fragment>
            <div> 
                <img className='logo' alt='Logo which reads LMB Design' src='../images/logo_white.png'></img>
                <Link to='/'></Link>
            </div>
        </Fragment>
    )
}

export default Logo;
