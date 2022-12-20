import React from "react";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Awards from "./components/Awards";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app" className="App">
      <header className="App-header">
        <MyNavbar></MyNavbar>
      </header>
      <div className="pt-8">
        <Profile></Profile>
        <Education></Education>
        <Awards></Awards>
        <ProfessionalExperience></ProfessionalExperience>
        <Skills></Skills>
        <Projects></Projects>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
