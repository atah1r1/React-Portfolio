import React from 'react';
import Education from './Education';
import Navbar from "./Navbar";
import Body from "./Body";
import Competences from "./Competences";
import Projects from './Projects';
import Footer from './Footer';
import Copyright from './Copyright'
function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Education />
      <Competences />
      <Projects />
      <Footer />
      <Copyright />
    </>
  )
}

export default App;
