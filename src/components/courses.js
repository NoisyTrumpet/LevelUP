import React from "react"
import { COLORS } from "../styles/constants"


import BodyLine from "../images/bodyLine.png"
import MissionImg from "../images/levelUP3.png"

import CirComp from "../images/cirCompIcon.png"
import BlkComp from "../images/blkCompIcon.png"
import HandIcon from "../images/handIcon.png"

import { Tabs, TabContent, TabLink } from "react-tabs-redux"
import ScrollAnimation from "react-animate-on-scroll"


import '../styles/courses.css'

const Courses = () => (
<div id="courses" className="courseMain">
    
      <h1 className="coursesSect" style={{color: COLORS.levelUpPurple}}>Code 
      <span style={{fontSize: "2.5rem", color: COLORS.levelUpBlue}}> for the</span> win</h1>
<Tabs renderActiveTabContentOnly={true}>
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

        <TabContent for="tab1">
            <div className="skewCardCourse1">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <div className="cardContCourse">
                <p><strong>LevelUP’s</strong> directive is to serve as a software factory 
                  to support a full range of Air Force and DoD missions.</p>
              </div>
            </ScrollAnimation>
            </div>
        </TabContent>
        <TabContent for="tab2">
            <div className="skewCardCourse2">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <div className="cardContCourse">
                <p>Although our initial area of focus supports a range of Air Force missions,
                  LevelUP will broaden its software development services to other functional areas.
                  This includes a Unified Platform that will allow greater operational capabilities between
                  the U.S. Air Force, U.S. Army, U.S. Navy, U.S. Marines and U.S. Coast Guard.
                </p>
              </div>
              </ScrollAnimation>
            </div>
        </TabContent>
        <TabContent for="tab3">
            <div className="skewCardCourse3">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <div className="cardContCourse">
                <p>By developing software using agile processes and the latest DevSecOps technology,
                  we're creating innovative capabilities at the scale and speed of need. 
                </p>
              </div>
              </ScrollAnimation>
            </div>
        </TabContent>

      <div className="skewCardBackCourse">
        <div className="courses">
        <TabLink to="tab1">
            <div className="courseItem">
              <img src={BlkComp} alt="" />
              <p>Mission</p>
            </div>
          </TabLink>
          <br/>
          <TabLink to="tab2">
            <div className="courseItem">
              <img src={CirComp} alt="" />
              <p>Focus</p>
            </div>
          </TabLink>
          <br/>
          <TabLink to="tab3">
            <div className="courseItem">
              <img src={HandIcon} alt="" />
              <p>Real Time<br/>Strategy</p>
            </div>
          </TabLink>

        </div>
      </div>

    </content>
  </div>

      <div className="mobBackCourses">

        <TabContent for="tab1">
            <div className="mobContCourses">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <img src={MissionImg} alt="" />
              <p><strong>LevelUP’s</strong> directive is to serve as a software factory 
              to support a full range of Air Force and DoD missions.
              </p>
            </ScrollAnimation>
            </div>
        </TabContent>
        <TabContent for="tab2">
            <div className="mobContCourses">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <img src={MissionImg} alt="" />
              <p>Although our initial area of focus supports a range of Air Force missions,
              LevelUP will broaden its software development services to other functional areas.
              This includes a Unified Platform that will allow greater operational capabilities between
              the U.S. Air Force, U.S. Army, U.S. Navy, U.S. Marines and U.S. Coast Guard.
              </p>
            </ScrollAnimation>
            </div>
        </TabContent>
        <TabContent for="tab3">
            <div className="mobContCourses">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <img src={MissionImg} alt="" />
              <p>By developing software using agile processes and the latest DevSecOps technology,
                  we're creating innovative capabilities at the scale and speed of need.
              </p>
            </ScrollAnimation>
            </div>
        </TabContent>

        <div className="mobSectCourses">
        <ul>
          <li>
          <TabLink to="tab1">
            <div className="courseItem">
              <img src={BlkComp} alt="" />
              <p>Mission</p>
            </div>
            </TabLink>
          </li>
          <img src={BodyLine} alt="" className="coursesDivide" />

          <li>
          <TabLink to="tab2">
            <div className="courseItem">
              <img src={CirComp} alt="" />
              <p>Focus</p>
            </div>
            </TabLink>
          </li>
          <img src={BodyLine} alt="" className="coursesDivide" />

          <li>
          <TabLink to="tab3">
            <div className="courseItem">
              <img src={HandIcon} alt="" />
              <p>Real Time<br/>Strategy</p>
            </div>
            </TabLink>
          </li>
          <img src={BodyLine} alt="" className="coursesDivide" />
        </ul>
        </div>
      </div>


    </Tabs>
  </div>

)

export default Courses
