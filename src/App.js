import React from "react";
import ContactForm from "./components/ContactForm";
import NavbarImg from "./assets/Navbar.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <img src={NavbarImg} alt="V Films" className="navbar-img" />
      </header>
      <div className="site-decor-top"></div>
      <main className="main-content">
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
