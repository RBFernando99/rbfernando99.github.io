import React from "react";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import Skills from "./components/SoftSkills";
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
        <Skills></Skills>
        <Projects></Projects>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
