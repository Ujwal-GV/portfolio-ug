import React, { useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { SVG, CSS, SCSS, ICONNAME } from "css.gg";
// import { FaHeart } from 'react-icons/fa';

export default function Content(props) {
  const {color} = props;
  const {colo} = props;

  // const myBack = {
  //   backgroundColor: col,
  //   color: color,
  // };

  const myHead = {
    backgroundColor: colo
  };

  const mySkills = {
    color: color,
    fontSize:"100%", 
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  }

  // const image = {
  //   backgroundImage: 'url(\'public/moon.png\')',
  //   backgroundSize: 'cover'
  // };

  useEffect(() =>{
    AOS.init({duration: 1000});
  }, [])

  return (
    <div className="containerC" id="skills">
      <div className="cards">
        <div className="card-menu" data-aos="fade-up">
        <h2 data-aos="fade-up" style={myHead}>TECHNICAL SKILLS</h2>
        <hr />
        <ul className="lists text-center">
          <li data-aos="fade-right" style={mySkills} >ReactJS</li>
          <li data-aos="fade-right" style={mySkills}>nodeJS</li>
          <li data-aos="fade-right" style={mySkills}>Java & Python</li>
          <li data-aos="fade-right" style={mySkills}>HTML, CSS, JS & PHP</li>
          <li data-aos="fade-right" style={mySkills}>C Programming</li>
          {/* <li data-aos="fade-right" style={mySkills}>HTML & CSS</li>
          <li data-aos="fade-right" style={mySkills}>Basic_Excel & Powerpoint_knowledge</li>
          <li data-aos="fade-right" style={mySkills}>Power_BI</li> */}
          </ul>
        </div>
        <div className="card-menu" data-aos="fade-up">
          <h2 data-aos="fade-up" style={myHead}>SOFT SKILLS</h2>
          <hr className='text-center'/>
          <ul className="lists text-center">
            <li data-aos="fade-left" style={mySkills}>Communication_skills</li>
            <li data-aos="fade-left" style={mySkills}>Creativity</li>
            <li data-aos="fade-left" style={mySkills}>Motivated_attitude</li>
            <li data-aos="fade-left" style={mySkills}>Multitasking_skills</li>
            <li data-aos="fade-left" style={mySkills}>Adaptability</li>
            </ul>
        </div>
      </div>

      {/* <div className="mySelf mb-5 p-5">
        
      </div>
      <div className="cards" id="content">
        <div className="card-menu" style={myBack}>
        <h2>Title</h2>
        <p>Lorem, ipsum.</p>
        </div>
        <div className="card-menu" style={myBack}>
        <h2>Title</h2>
        <p>Lorem, ipsum.</p>
        </div>
      </div> */}
    </div>
  )
}
