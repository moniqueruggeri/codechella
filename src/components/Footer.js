import React from 'react';
import logo from '../assets/img/small-logo.svg';
import 'material-icons/iconfont/material-icons.css';

function Footer() {
    return (
        <footer className="footer">
        <img src={logo} alt=""/>
        <ul className="socialMediaIcons">
            <li>
                <i className="fab fa-twitch"></i>
            </li>
            <li>
                <i className="fab fa-instagram"></i>
            </li>
            <li>
                <i className="fab fa-github"></i>
            </li>
            <li>
                <i className="fa-brands fa-x-twitter"></i>
            </li>
        </ul>
    </footer>
    );
}

export default Footer