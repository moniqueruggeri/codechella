import React from "react";

function Cards() {
  return (
    <section className="cards">
      <div className="presentation">
        <p className="textParagraph">
          Hora de programar nossa memória com novas lembranças!
          <br />
          <br />
          Uma nova experiência sobre música, linguagens e, claro, tecnologia!
          Somos um festival diverso, com vários artistas e referências.
        </p>
        <p className="textEmphasis">
          <span>//</span>Divirta-se<span>!</span>
        </p>
      </div>
      <div className="card cardTickets">
        <div className="titles">
          <i className="material-icons">confirmation_number</i>
          <h2>Tickets</h2>
        </div>
        <p className="textParagraph">
          Hora de programar nossa memória com novas lembranças! Uma nova
          experiência sobre música, linguagens e, claro, tecnologia! Somos um
          festival diverso, com vários artistas e referências.
        </p>
        <a className="button" href="#">
          Ingressos
        </a>
      </div>
      <div className="card cardVip">
        <div className="titles">
          <i className="material-icons">local_activity</i>
          <h2>Vip</h2>
        </div>
        <p className="textParagraph">
          Hora de programar nossa memória com novas lembranças! Uma nova
          experiência sobre música, linguagens e, claro, tecnologia! Somos um
          festival diverso, com vários artistas e referências.
        </p>
        <a className="button" href="#">
          Ingressos
        </a>
      </div>
      <div className="card cardCamping">
        <div className="titles">
          <i className="material-symbols-outlined">camping</i>
          <h2>Camping</h2>
        </div>
        <p className="textParagraph">
          Hora de programar nossa memória com novas lembranças! Uma nova
          experiência sobre música, linguagens e, claro, tecnologia! Somos um
          festival diverso, com vários artistas e referências.
        </p>
        <a className="button" href="#">
          Ingressos
        </a>
      </div>
    </section>
  );
}

export default Cards