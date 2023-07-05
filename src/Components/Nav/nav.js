import React, {Fragment} from 'react';
import Container from '../Container/container';
import './nav.css';
import { Link } from 'react-router-dom';
import Navlink from '../Nav-Link/navlink.js';
import '../../global.css';

function Navbar(props) {

    return(
        <Fragment>
        <div>
            <header id='header' className='nav'>
            
                <Container className='navContainer'>
                 

                   <ul id="nav-links">
                        <li> 
                            <Link to='/aboutme'>
                                {' '}
                                        <Navlink text='About Me'/>
                            </Link>
                            </li>
                            <li>
                            <Link to='/projects'>
                                {' '}
                                        <Navlink text='My Projects'/>
                            </Link>
                            </li>
                            <li>
                            <Link to='/services'>
                                {' '}
                                        <Navlink text='Services'/>
                            </Link>
                            </li>
                            <li>
                            <Link to='/contact'>
                                {' '}
                                        <Navlink text='Contact Me'/>
                            </Link>
                        </li>
                   </ul>
                    
                </Container>
                
            </header>
        </div>
        </Fragment>
    )
}

export default Navbar;