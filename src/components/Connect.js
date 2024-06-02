import React from 'react';
import { IoMdMail} from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Connect() {
  return (
    <div className='nav-footer' id='connect'>
      <div className="box" style={{color: "white"}}>CONNECT WITH ME:</div>
      <div className="box"><a href="mailto:ujwalgowda2002v@gmail.com"><IoMdMail style={{color: "white", width: "30px", height: "30px"}} /><br />E-mail</a></div>
      <div className="box"><a href="tel:+91 7483262684"><FaPhone style={{color: "white", width: "20px", height: "20px"}} /><br />Phone</a></div>
      <div className="box"><a href="https://www.linkedin.com/in/ujwal-gowda-v-5ba277276" rel="noreferrer" target='_blank'><FaLinkedin style={{color: "white", width: "30px", height: "30px"}} /><br />Linkedin</a></div>
    </div>
  )
}
