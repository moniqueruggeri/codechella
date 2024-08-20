import React from 'react';
import mainLogo from '../assets/img/main-logo.svg';
import 'material-icons/iconfont/material-icons.css';
import Button from './Button';

function Banner() {
    return (
        <section className="bannerHeader">
        <div className="bannerBg">
        </div>
        <div className="headerContainer">
          <img src={mainLogo} alt="Logo CodeChella" />
          <Button text="Compre agora!" link="/ingresso" className="button buttonHeader"/>
          <div className="bannerDate">
            <h1>&lt; <span>10</span>&&<span>11</span>/ &gt;</h1>
            <h2>de agosto</h2>
          </div>
        </div>
      </section>
    )
}

export default Banner