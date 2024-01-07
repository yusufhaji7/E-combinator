import { useState } from 'react';
import Header from './components/Header';
import Intro from "./components/Intro";
import About from './components/Aboutus';
import Services from './components/Services';

function App() {
  return (
    <div className="app-container">
      <div className="background-container">
        <Header />
        <Intro />
        <About />
        <Services />
      </div>
    </div>
  );
}

export default App;