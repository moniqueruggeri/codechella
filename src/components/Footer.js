import React from 'react';
import logo from '../assets/img/small-logo.svg';
import 'material-icons/iconfont/material-icons.css';

function Footer() {
    return (
        <footer class="footer">
        <img src={logo} alt=""/>
        <ul class="socialMediaIcons">
            <li>
                <i class="fab fa-twitch"></i>
            </li>
            <li>
                <i class="fab fa-instagram"></i>
            </li>
            <li>
                <i class="fab fa-github"></i>
            </li>
            <li>
                <i class="fa-brands fa-x-twitter"></i>
            </li>
        </ul>
    </footer>
    );
}

export default Footer