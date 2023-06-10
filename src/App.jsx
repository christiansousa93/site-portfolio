import { BrowserRouter } from "react-router-dom";

import Computador from "./assets/minha-imagem.png"

import "./index.css";

import {
  About,
  Certification2,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <div class="loader">
            <a href='https://github.com/christiansousadev/pacman-css' target="_blank">
            <div class="circles"> 
            <span class="one"></span>
            <span class="two"></span>
            <span class="three"></span>
          </div>
        <div class="pacman">
          <span class="top"></span>
          <span class="bottom"></span>
          <span class="left"></span>
          <div class="eye"></div>
        
        </div>
        </a>
      </div>
          <div class="dcv">
          <a href='https://drive.google.com/u/0/uc?id=1I-dj1p6mnO-CyaQMRio5iHngM_tzF1i5&export=download' target="_blank">
            <button>DOWNLOAD CURRÍCULO</button></a></div>
<div class="computador">
            <img src={Computador} id="computador" alt="computador" title="computador" /> </div>
            <div class="loader">
       
      </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certification2 />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    
  );
};



export default App;
