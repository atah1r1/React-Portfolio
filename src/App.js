import React, { useEffect, useState } from 'react';
import Education from './Education';
import Navbar from "./Navbar";
import Body from "./Body";
import Competences from "./Competences";
import Projects from './Projects';
import Footer from './Footer';
import Copyright from './Copyright';
import axios from 'axios';
function App() {
  const [info, setInfo] = useState({});
  const getData = async () => {
    try {
  const userInfo = await axios.get("http://localhost:8000/api/")
      
        setInfo(userInfo.data.info);  // set State
    
    } catch (err) {
      console.error(err.message);
    }
  };
    
    useEffect(()=>{
      
      getData()
  }, [])
  return (
    <>
      <Navbar fullname ={info.full_name} />
      <Body  about={info.mini_about} fullname ={info.full_name}/>
      <Education />
      <Competences />
      <Projects />
      <Footer />
      <Copyright />
    </>
  )
}

export default App;
