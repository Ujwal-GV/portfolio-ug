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
    fontSize:"20px", 
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  }

  const myHead = {
    backgroundColor: colo
  };

  return (
    <div className="containerC" id="projects">
      <div className="cards">
        <div className="card-menu" data-aos="fade-up">
        <h2 data-aos="fade-up" style={myHead}>CERTIFICATIONS</h2>
        <hr className='text-center'/>
        <div className="Cboxes" style={myProject}>
        <div class="Cibox">
            <img src="/1SG20CS107 (Internship).jpg" alt="" />
            <div class="info">
                <h1>{props.c1}</h1>
                <p>COMPANY: <br /><b>VARCONS TECHNOLOGIES Pvt. Ltd.</b></p>
                <p>TITLE: <br /><b>TEMPLATE FOR PHOTOGRAPHY PORTFOLIO WEBSITE</b></p>
                <p>DURATION: <br /><b>AUG 13, 2023 - SEP 22, 2023</b></p>
                <p>ROLE: <br /><b>MERN STACK DEVELOPER</b></p>
                <a href="/1SG20CS107 (Internship).pdf" download>DOWNLOAD</a>
            </div>
        </div>

        <div class="Cibox">
            <img src="/1SG20CS107 (Internship1).jpg" alt="" />
            <div class="info">
                <h1>{props.c2}</h1>
                <p>COMPANY: <br /><b>KARUNADU TECHNOLOGIES Pvt. Ltd.</b></p>
                <p>TITLE: <br /><b>PREDICTION OF DEMENTIA DISEASE USING DECISION TREE</b></p>
                <p>DURATION: <br /><b>AUG 14, 2023 - SEP 10, 2023</b></p>
                <p>ROLE: <br /><b>SOFTWARE DEVELOPER</b></p>
                <a href="/1SG20CS107 (Internship1).pdf" download>DOWNLOAD</a>
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
