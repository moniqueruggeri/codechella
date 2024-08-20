import "./styles/sass/style.sass";
import "./styles/sass/index.sass";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LineUp from "./components/LineUp";
import Experiencia from "./pages/Experiencia";
import MapaDeSetores from "./pages/MapaDeSetores";
import Faq from "./pages/Faq";
import Ingresso from "./pages/Ingresso";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
      <Banner />
      <Cards />
      <LineUp />
      <Footer />
    </>
  );
}

export default App;
