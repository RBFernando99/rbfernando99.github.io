import React from "react";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import MyContactForm from "./components/MyContactForm";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar></MyNavbar>
        <MyContactForm></MyContactForm>
        <MyFooter></MyFooter>
      </header>
    </div>
  );
}

export default App;
