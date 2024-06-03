import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useState, useEffect } from 'react';

export default function Navigation(props) {
  // const [activeLink, setActiveLink] = useState('home');
  // const [scrolled, setScrolled] = useState('false');

  // useEffect(() => {
  //   if(window.screenY > 50){
  //     setScrolled(true);
  //   }
  //   else{
  //     setScrolled(false);
  //   }
  //   window.addEventListener("scroll",onscroll);

  //   return () => window.addEventListener("scroll", onscroll);
  // }, [])
  
  return (
    <Navbar expand="lg" className="nav" data-bs-theme={props.mode} id="navigation">
      <Container className="cont">
        <Navbar.Brand className="title"><b>{props.title}</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className="con">About</Nav.Link>
            <Nav.Link href="#skills" className="con">Skills</Nav.Link>
            <Nav.Link href="#projects" className="con">Projects</Nav.Link>
            <Nav.Link href="#connect" className="con">Connect</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#home" className="soc"></Nav.Link>
            <Nav.Link href="#skills" className="con">Skills</Nav.Link>
            <Nav.Link href="#connect" className="con">Connect</Nav.Link>
          </Nav> */}

        </Navbar.Collapse>
      </Container>
      <div className={`form-check form-switch text-${(props.mode)==='dark'?'light':'dark'}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault" />
        <label className="form-check-label" id="theme" htmlFor="flexSwitchCheckDefault">{props.text}</label>
      </div>
    </Navbar>
  );
}