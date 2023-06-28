import React, {Fragment} from 'react';
import LeftContainer from "../LeftAlignContainer/LeftContainer";
import './footer.css';
import { Link } from 'react-router-dom';
import Navlink from '../Nav-Link/navlink.js';
import '../../global.css';
import CenterContainer from "../CenterAlignContainer/CenterContainer";


function Footer(props) {
    return(
        <Fragment>
        <div>
           
            <footer className='footer'>
               
                   
            <CenterContainer>
                   <ul className='footerLinks' id="nav-links">
                        <li> 
                            <Link  className='footerLink' to='/aboutme'>
                                {' '}
                                        <Navlink text='About Me'/>
                            </Link>
                            <Link className='footerLink' to='/projects'>
                                {' '}
                                        <Navlink text='My Projects'/>
                            </Link>
                            <Link className='footerLink' to='/services'>
                                {' '}
                                        <Navlink text='Services'/>
                            </Link>
                            <Link className='footerLink' to='/blog'>
                                {' '}
                                        <Navlink text='Blog'/>
                            </Link>
                            <Link className='footerLink' to='/contact'>
                                {' '}
                                        <Navlink text='Contact Me'/>
                            </Link>
                        </li>
                   </ul>
                   </CenterContainer>

                <CenterContainer>
                
                <p className='copyright'>Copyright © : Laurence Moreton Burt 2020-2023 <br/>
                This website was designed and built by Laurence Moreton Burt</p>
                
                
                </CenterContainer>
            </footer>
         
        </div>
        </Fragment>
    )
}

export default Footer;

