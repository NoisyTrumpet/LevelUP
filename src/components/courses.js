import React from "react"
import { COLORS } from "../styles/constants"

import CourseImg from "../images/levelUP3.png"
import BodyLine from "../images/bodyLine.png"
import SideLine from "../images/sideLine.png"

import CirComp from "../images/cirCompIcon.png"
import BlkComp from "../images/blkCompIcon.png"
import HandIcon from "../images/handIcon.png"

import '../styles/courses.css'

const Courses = () => (
  <div id="courses" style={{ padding: "0 0 5.5rem 0", textAlign: "center" }}>
    
      <h1 className="coursesSect" style={{color: COLORS.levelUpPurple}}>Code <span style={{fontSize: "2rem", color: COLORS.levelUpBlue}}>for the</span> win</h1>

   <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >

      <div className="skewCardCourse">
      {/*<img src={CourseImg} alt="" />*/}
        <div className="cardContCourse">
          <p>LevelUP’s directive is to serve as a software factory 
          to support a full range of Air Force and DoD missions.</p>
        </div>
      </div>

      <div className="skewCardBackCourse">
        <div className="courses">
          <div className="courseItem">
            <img src={BlkComp} alt="" />
            <p>Mission</p>
          </div>
          <img src={BodyLine} alt="" className="coursesDivide" />
          <div className="courseItem">
            <img src={CirComp} alt="" />
            <p>Focus</p>
          </div>
          <div className="courseSpacer" />
          <div className="courseItem">
            <img src={HandIcon} alt="" />
            <p>Real Time<br/>Strategy</p>
          </div>
          
          
        </div>
      </div>
    
     <img src={SideLine} alt="" className="sideLineCourse" />

    </content>

  </div>
)

export default Courses
