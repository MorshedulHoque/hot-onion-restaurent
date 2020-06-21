import React from 'react';
import logo from '../../hot-onion-restaurent-resources-master/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            
            <div className="image">
                <img src={logo} alt=""/>
            </div>
            <div className="right-elements">
                 <a href=""><FontAwesomeIcon icon={faCartArrowDown} /></a>
                <button className="logIn">Log In</button>
                <button className="signUp">Sign Up</button>
            </div>



        </div>
    );
};

export default Header;