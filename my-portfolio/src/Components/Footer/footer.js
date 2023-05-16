import React, {Fragment} from 'react';
import Container from '../Container/container';
import './footer.css';
import { Link } from 'react-router-dom';
import Navlink from '../Nav-Link/navlink.js';
import '../../global.css';

function Footer(props) {
    return(
        <Fragment>
        <div>
            <footer className='footer'>
               
                   

                   <ul id="nav-links">
                        <li> 
                            <Link to='/aboutme'>
                                {' '}
                                        <Navlink text='About Me'/>
                            </Link>
                            <Link to='/projects'>
                                {' '}
                                        <Navlink text='My Projects'/>
                            </Link>
                            <Link to='/services'>
                                {' '}
                                        <Navlink text='Services'/>
                            </Link>
                            <Link to='/blog'>
                                {' '}
                                        <Navlink text='Blog'/>
                            </Link>
                            <Link to='/contact'>
                                {' '}
                                        <Navlink text='Contact Me'/>
                            </Link>
                        </li>
                   </ul>
                
            </footer>
        </div>
        </Fragment>
    )
}

export default Footer;

