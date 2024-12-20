import React from 'react';
import { IoMdMail} from "react-icons/io";
import { FaPhone, FaArrowUp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Connect() {
  return (
    <div className='nav-footer' id='connect'>
      <div className="box" style={{color: "white"}}>CONNECT WITH ME:</div>
      <div className="box"><a href="mailto:ujwalgowda2002v@gmail.com"><IoMdMail style={{color: "white", width: "20px", height: "20px"}} /></a></div>
      <div className="box"><a href="tel:+91 7483262684"><FaPhone style={{color: "white", width: "15px", height: "15px"}} /></a></div>
      <div className="box"><a href="https://www.linkedin.com/in/ujwal-gowda-v-5ba277276" rel="noreferrer" target='_blank'><FaLinkedin style={{color: "white", width: "20px", height: "20px"}} /></a></div>
      <div className="box" id="arrow"><a href="#navigation"><FaArrowUp  style={{color: "black", fontWeight: "bolder", fontSize: "2vh"}} /></a></div>
    </div>
  )
}