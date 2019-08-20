import React from "react"

import SideLine from "../images/sideLine.png"
import BodyLine from "../images/bodyLine.png"
import CityImg from "../images/san-antonio-night.jpg"

import '../styles/about.css'

const About = () => (
  <div id="about" style={{ padding: "4rem 0 5.5rem 0", textAlign: "center" }}>
    
      <h1 className="aboutSect">About</h1>

   <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >

    <div className="cards">
      <div className="skewCard">
        <div className="cardCont">
          <h2 className="cardSubTitle"> Change the Game <br />
          <img src={BodyLine} alt="" /> </h2>
          <p>To boldly meet the demands of national defense in this digital world, 
          LevelUP is changing the tactical approach by leveraging capabilities that 
          lay the framework for smarter, nimbler, more advanced and adaptive cyberspace 
          operations capabilities.</p>
        </div>
      </div>
    </div>

    <div className="cards">
      <div className="skewCardBack">
        <img src={CityImg} alt="" />
      </div>
    </div>
     
	<img src={SideLine} alt="" className="sideLine" />
    
    </content>

    <img src={BodyLine} alt="" className="bottomLine" />

  </div>
)

export default About
