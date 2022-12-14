import React from "react";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar></MyNavbar>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
