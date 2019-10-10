import React from "react"
import {Tab, Row, Col, Nav} from "react-bootstrap"
import { COLORS } from "../styles/constants"


import BodyLine from "../images/bodyLine.png"
import MissionImg from "../images/levelUP3.jpg"
import FocusImg from "../images/LevelUP11.jpg"
import StrategyImg from "../images/LevelUP17.jpg"
import CirComp from "../images/cirCompIcon.png"
import BlkComp from "../images/blkCompIcon.png"
import HandIcon from "../images/handIcon.png"

import courseStyles from '../styles/courses.module.scss'

const Courses = () => (
  <div id="courses" className={courseStyles.courseMain}>
    
      <h1 className={courseStyles.coursesSect} style={{color: COLORS.levelUpPurple}}>Code 
      <span style={{fontSize: "2.5rem", color: COLORS.levelUpBlue}}> for the</span> win</h1>

<Tab.Container defaultActiveKey="first">

<div className={courseStyles.cardSectCourse}>
   <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 550px))",
        overflow: "visible"
      }}
    >

<Row>
  <div className={courseStyles.skewCardCourse}>
    <Col className={courseStyles.cardContCourse}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Tab.Content>
            <img src={MissionImg} alt="" />
            <p>
            LevelUP’s directive is to serve as a software factory to support a full 
            range of Air Force and DoD missions.
            </p>
          </Tab.Content>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Tab.Content>
          <img src={FocusImg} alt="" />
            <p style={{fontSize: "1.2rem"}}>
            Although our initial area of focus supports a range of Air Force missions, 
            LevelUP will broaden its software development services to other functional 
            areas. This includes a Unified Platform that will allow greater operational 
            capabilities between the U.S. Air Force, U.S. Army, U.S. Navy, U.S. Marines 
            and U.S. Coast Guard.
            </p>
          </Tab.Content>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <Tab.Content>
            <img src={StrategyImg} alt="" />
            <p>
            By developing software using agile processes and the latest DevSecOps technology, 
            we’re creating innovative capabilities at the scale and speed of need.
            </p>
          </Tab.Content>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </div>


  <div className={courseStyles.skewCardBackCourse}>
    <Col className={courseStyles.courses}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" className={courseStyles.courseItem}>
          <img src={BlkComp} alt="" /><span>Mission</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" className={courseStyles.courseItem}>
          <img src={CirComp} alt="" /><span>Focus</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third" className={courseStyles.courseItem}>
          <img src={HandIcon} alt="" /><span>Real Time Strategy</span></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  </div>



</Row>
</content>
</div>

  <div className={courseStyles.mobBackCourses}>
    <Row>
        <Col className={courseStyles.mobContCourses} style={{padding: 0}}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Tab.Content>
              <img src={MissionImg} alt="" />
              <p>
                LevelUP’s directive is to serve as a software factory 
                to support a full range of Air Force and DoD missions.
                </p>
              </Tab.Content>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Tab.Content>
              <img src={FocusImg} alt="" />
              <p>
                Although our initial area of focus supports a range of 
                Air Force missions, LevelUP will broaden its software 
                development services to other functional areas. This 
                includes a Unified Platform that will allow greater 
                operational capabilities between the U.S. Air Force, 
                U.S. Army, U.S. Navy, U.S. Marines and U.S. Coast Guard.
                </p>
              </Tab.Content>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Tab.Content>
              <img src={StrategyImg} alt="" />
              <p>
                By developing software using agile processes and the 
                latest DevSecOps technology, we’re creating innovative 
                capabilities at the scale and speed of need.
                </p>
              </Tab.Content>
            </Tab.Pane>
          </Tab.Content>
        </Col>
    </Row>

    <Row>
      <Col className={courseStyles.mobSectCourses}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first" className={courseStyles.courseItem}>
            <img src={BlkComp} alt="" /><span>Mission</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second" className={courseStyles.courseItem}>
            <img src={CirComp} alt="" /><span>Focus</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third" className={courseStyles.courseItem}>
            <img src={HandIcon} alt="" /><span>Real Time<br/>Strategy</span></Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </div>

</Tab.Container>

  </div>
)

export default Courses
