import "./styles/sass/style.sass";
import "./styles/sass/index.sass";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LineUp from "./components/LineUp";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <LineUp />
      <Footer />
    </>
  );
}

export default App;
