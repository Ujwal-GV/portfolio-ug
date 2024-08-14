import React from 'react'

export default function Project(props) {
  // const {col} = props;
  const {color} = props;
  const {colo} = props;

  // const myBack = {
  //   backgroundColor: col,
  //   color: color,
  // };

  const myProject = {
    color: color,
    fontSize:"100%", 
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  }

  const myHead = {
    backgroundColor: colo
  };

  return (
    <div className="containerP" id="projects">
      <div className="cards">
        <div className="card-menuP" data-aos="fade-up">
        <h2 data-aos="fade-up" style={myHead}>PROJECTS</h2>
        <hr />
        <div className="Pboxes" style={myProject}>
        <div class="Pibox">
            <img src="/MERN.png" alt="" />
            <div class="info">
                <h1>{props.p1}</h1>
                <p>Create a stunning online showcase for your photography talents. Easily upload and display your captivating images with our customizable templates.</p>
                <p>TECHNOLOGIES and FRAMEWORKS<br /> <b>ReactJS, HTML, CSS, JS, Bootstrap </b> </p>
                <p>ROLE: <b>MERN STACK DEVELOPER</b></p>
                <a href="https://github.com/Ujwal-GV/The-Photography-Portfolio" target="_blank" rel="noreferrer">GIT CODE</a>
            </div>
        </div>

        <div class="Pibox">
            <img src="/AI.png" alt="" />
            <div class="info">
                <h1>{props.p2}</h1>
                <p>Implement Convolutional Neural Networks to identify defects on solar cell surfaces, optimizing efficiency and quality control in solar production.</p>
                <p>TECHNOLOGIES and FRAMEWORKS<br /> <b>Python, TensorFlow/Keras, HTML, CSS, JavaScript </b> </p>
                <p>ROLE: <b>FULL STACK DEVELOPER</b></p>
                <a href="https://github.com/Ujwal-GV/NeuralNetwork-Solarcell">GIT CODE</a>
            </div>
          </div>

          <div class="Pibox">
            <img src="/FULLSTACK.png" alt="" />
            <div class="info">
                <h1>{props.p3}</h1>
                <p>Streamline event planning with an efficient banquet hall booking system. Simplify reservations, manage availability, and ensure seamless event coordination.</p>
                <p>TECHNOLOGIES and FRAMEWORKS<br /> <b>PHP, MySql, HTML, JS </b> </p>
                <p>ROLE: <b>FULL STACK DEVELOPER</b></p>
                <a href="https://github.com/Ujwal-GV/banquetHall/tree/master" target="_blank" rel="noreferrer">GIT CODE</a>
            </div>
          </div>

          <div class="Pibox">
            <img src="/ANDROID.png" alt="" />
            <div class="info">
                <h1>{props.p4}</h1>
                <p>Enjoy addictive gameplay with the Candy Crush application. Match colorful candies only with level 1.</p>
                <p>TECHNOLOGIES and FRAMEWORKS<br /> <b>JAVA, XML </b> </p>
                <p>ROLE: <b>BUILD ENGINEER</b></p>
                <a href="www.google.com">GIT CODE</a>
            </div>
          </div>
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
    </div>
  )
}
