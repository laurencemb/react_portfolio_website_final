import React, {Fragment} from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import Navlink from '../Nav-Link/navlink.js';
import '../../global.css';
import CenterContainer from "../CenterAlignContainer/CenterContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons';


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
                            </li>
                            <li> 
                            <Link className='footerLink' to='/projects'>
                                {' '}
                                        <Navlink text='My Projects'/>
                            </Link>
                            </li>
                            <li> 
                            <Link className='footerLink' to='/services'>
                                {' '}
                                        <Navlink text='Services'/>
                            </Link>
                            </li>
                            <li> 
                            <Link className='footerLink' to='/contact'>
                                {' '}
                                        <Navlink text='Contact Me'/>
                            </Link>
                        </li>
                   </ul>
                   </CenterContainer>

                   <CenterContainer>
                   <Link to='https://www.linkedin.com/in/laurence-moreton-burt-b5ab64a8/'>
                   <FontAwesomeIcon className="icon" icon={faLinkedin} />
                   </Link>
                   <Link to='https://twitter.com/laurence_tjmb'>
                   <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                   </Link>
                   <Link to='https://www.behance.net/edsear'>
                   <FontAwesomeIcon className="icon" icon={faBehanceSquare} />
                   </Link>
                   
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

