import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import SocialLinks from "./Components/SocialLinks";
import Portfolio from "./Components/Portfolio";
// import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      {/* <Experience /> */}
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
