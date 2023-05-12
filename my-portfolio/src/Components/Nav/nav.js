import React, {Fragment} from 'react';
import Container from '../Container/container';
import './nav.css';
import Logo from '../logo/logo.js';
import { Link } from 'react-router-dom';
import Navlink from '../Nav-Link/navlink.js';
import '../../global.css';

function Navbar(props) {

    return(
        <Fragment>
        <div>
            <header id='header' className='nav'>
                <Container>
                   <div><Logo/></div> 

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
                </Container>
            </header>
        </div>
        </Fragment>
    )
}

export default Navbar;