import './App.css';
import { useState } from 'react';
import Navigation from './components/Navi';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Certificates from './components/Certificates';
import Connect from './components/Connect';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const content = "An aspiring MERN stack developer seeking opportunities to contribute innovative solutions and grow in the tech industry.";
  const [mode,setMode] = useState("light");
  const [text,dText] = useState("Dark Mode");
  const [color, tColor] = useState("black");
  const [bColor, darkBColor] = useState("white");
  const[colo, hColo] = useState("rgb(25, 26, 26)");
  const project1 = "PHOTOGRAPHY PORTFOLIO WEBSITE";
  const project2 = "SOLAR CELL SURFACE DEFECT DETECTION USING CNN";
  const project3 = "BANQUET HALL BOOKING SYSTEM";
  const project4 = "CANDY CRUSH APPLICATION (L1)";
  const project5 = "Employee Management System";
  const certficate1 = "FULL STACK WEB DEVELOPMENT INTERN";
  const certificate2 = "MACHINE LEARNING AND ARTIFICIAL INTELLLIGENCE";

  const toggleMode = () =>{
    if(mode === 'dark')
    {
      setMode('light');
      dText("Dark Mode");
      tColor("black");
      darkBColor("white");
      hColo("rgb(25, 26, 26)");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    else{
      setMode('dark');
      dText("Light Mode");
      tColor("black");
      darkBColor("black");
      hColo("rgb(0,0,0)");
      document.body.style.backgroundColor = '#262f36';
      document.body.style.color = 'white';
    }
  }
  return (
    <>
    <Navigation title="UG_PORTFOLIO" mode={mode} toggle={toggleMode} text={text}/>
    <About name="UJWAL GOWDA V" info={content} color={color} bColor={bColor} mode={mode}/>
    <Skills color={color} colo={colo} mode={mode}/>
    <Project color={color} colo={colo} mode={mode} p1={project1} p2={project2} p3={project3} p4={project4} p5={project5} />
    <Certificates color={color} colo={colo} mode={mode} c1={certficate1} c2={certificate2}/>
    <Connect/>
    </>
  );
}

export default App;
