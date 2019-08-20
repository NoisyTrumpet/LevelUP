import React from "react"

import BodyLine from "../images/bodyLine.png"
import SideLine from "../images/sideLine.png"

import CirComp from "../images/cirCompIcon.png"
import BlkComp from "../images/blkCompIcon.png"
import HandIcon from "../images/handIcon.png"

import '../styles/courses.css'

const Courses = () => (
  <div id="courses" style={{ padding: "0 0 5.5rem 0", textAlign: "center" }}>
    
      <h1 className="coursesSect">Learn</h1>
      <h1 className="coursesSectSub"><span style={{fontSize: "2rem"}}>and</span> Adapt</h1>

   <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >

      <div className="skewCardCourse">
      <img src={BodyLine} alt="" />
        <div className="cardContCourse">
          <p>Being lean allows us to validate our assumptions and 
          mitigate risk at every turn. We are constantly ensuring 
          that wwe are building the next most valuable thing, the 
          simplest way, as fast as possible.</p>
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
            <p>Mission</p>
          </div>
          <div className="courseSpacer" />
          <div className="courseItem">
            <img src={HandIcon} alt="" />
            <p>Mission</p>
          </div>
          
          
        </div>
      </div>
    
     <img src={SideLine} alt="" className="sideLineCourse" />

    </content>

  </div>
)

export default Courses
