import { useLocation } from 'react-router-dom';
import React from 'react';
import './navlink.css';
import '../../global.css'

function Navlink(props) {
 
return (
    <button id='navlink' className={props.className}>
{props.text}
    </button>
)
}

export default Navlink;