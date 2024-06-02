import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function About(props) {
    const {bColor} = props;

    const myButton = {
      color: bColor
    }

    useEffect(() => {
      AOS.init((2000));
    }, []);
    return (
    <div id="about">
      <div className="mySelf">
        <div className="box" data-aos="fade-left"> 
        <h5>Hello, I'm</h5>
        <h2>
          <b style={{fontSize:"25px"}}>{props.name}</b>
        </h2>
        <h2><b style={{fontSize:"25px"}}>MERN-STACK DEVELOPER</b></h2>
        <p>{props.info}</p>
        </div>

        <div className="box" data-aos="fade-right">
          Im a developer<br></br>
          <button type="button" className={`btn btn-${(props.mode)==='light'?'dark':'light'}`} ><a href="/Ujwal_Gowda_V_(R).pdf" download style={myButton}>Download Resume</a></button>
        </div>

        <div className="box" data-aos="fade-left">
          <div className="ibox">
          <img src="/UG.jpg" alt="ujwal" />
          </div>
        </div>

      </div>
    </div>
  )
}
