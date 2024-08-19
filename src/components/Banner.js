import React from 'react';
import mainLogo from '../assets/img/main-logo.svg';
import 'material-icons/iconfont/material-icons.css';
import Button from './Button';

function Banner() {
    return (
        <section class="bannerHeader">
        <div class="bannerBg">
        </div>
        <div class="headerContainer">
          <img src={mainLogo} alt="Logo CodeChella" />
          <Button text="Compre agora!" href="/ingresso" className="button buttonHeader"/>
          <div class="bannerDate">
            <h1>&lt; <span>10</span>&&<span>11</span>/ &gt;</h1>
            <h2>de agosto</h2>
          </div>
        </div>
      </section>
    )
}

export default Banner