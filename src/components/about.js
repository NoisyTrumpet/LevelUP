import React from "react"
import { COLORS } from "../styles/constants"

import SideLine from "../images/sideLine.png"
import BodyLine from "../images/bodyLine.png"

import '../styles/about.css'

const About = () => (
<div id="about" className="aboutMain">
    
        <h1 className="aboutSect">About</h1>
        
<div className="cardSect">
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
          <h2 className="cardSubTitle"> Change<br/>the Game <br />
          <img src={BodyLine} alt="" /> </h2>
          <p><strong>LevelUP</strong> combines commercial best practices with DoD resources to code 
          rapidly deployable software solutions. By embracing a startup model that replaces 
          bureaucracy with innovation and collaboration, we’re pushing boundaries to transform 
          the future and protect the security of the United States.
          </p>
        </div>
      </div>
    </div>

    <div className="cards">
      <div className="skewCardBack">
      </div>
    </div>

      <div className="cards">
        <div className="sideLine">
          <img src={SideLine} alt="" />
        </div>
      </div>

    </content>
</div>


  <div className="bottomSect" style={{color: COLORS.levelUpBlue}}>
    <h2>We're not just here to <span style={{color: COLORS.levelUpPurple}}>change<br/>
    the game.</span> We're here to<br/>
    <span className="botChan1">Win it</span></h2>

    <img src={BodyLine} alt="" className="bottomLine" />
  </div>

</div>
)

export default About
