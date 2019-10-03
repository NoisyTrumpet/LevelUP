import React from "react"
import { COLORS } from "../styles/constants"


import BodyLine from "../images/bodyLine.png"
import MissionImg from "../images/levelUP3.png"

import CirComp from "../images/cirCompIcon.png"
import BlkComp from "../images/blkCompIcon.png"
import HandIcon from "../images/handIcon.png"

import '../styles/courses.css'

const Courses = () => (
  <div id="courses" className="courseMain">
    
      <h1 className="coursesSect" style={{color: COLORS.levelUpPurple}}>Code 
      <span style={{fontSize: "2.5rem", color: COLORS.levelUpBlue}}> for the</span> win</h1>

<div className="cardSectCourse">
   <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
        left: 0,
        overflow: "visible"
      }}
    >

      <div className="skewCardCourse">
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

    </content>
  </div>

      <div className="mobBackCourses">
        <div className="mobContCourses">
          <img src={MissionImg} alt="" />
          <p><strong>LevelUP’s</strong> directive is to serve as a software factory 
          to support a full range of Air Force and DoD missions.
          </p>
        </div>
        <div className="mobSectCourses">
        <ul>
          <li>
            <div className="courseItem">
              <img src={BlkComp} alt="" />
              <p>Mission</p>
            </div>
          </li>
          <img src={BodyLine} alt="" className="coursesDivide" />
          <li>
            <div className="courseItem">
              <img src={CirComp} alt="" />
              <p>Focus</p>
            </div>
          </li>
          <div className="courseSpacer" />
          <li>
            <div className="courseItem">
              <img src={HandIcon} alt="" />
              <p>Real Time<br/>Strategy</p>
            </div>
          </li>
        </ul>
        </div>
      </div>

  </div>
)

export default Courses
