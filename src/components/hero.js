import React from "react"
import PropTypes from "prop-types"
import { COLORS } from "../styles/constants"
import Button from "../components/button"
import heroImage from "../images/heroBack.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

import '../styles/hero.css'

const Header = ({ siteTitle }) => (
  <div style={{
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "4rem 1rem"
  }}>
    <div className="heroBanner" style={{
        backgroundImage: `url(${heroImage})`,
        position: "absolute",
        backgroundSize: "cover",
        top: 0,
        right: 0,
        zIndex: -5,
        maxHeight: 1020,
        maxWidth: 1424,
        width: `100%`,
        height: `100%`,
        opacity: .9,
    }}/>
    <h1 style={{marginTop: 80, textAlign: "center", fontFamily: "Ready Player One", color: COLORS.levelUpBlue }}>Level UP</h1>
    <p style={{textAlign: "center", maxWidth: 440, fontFamily: "azo-sans-web"}}>
      This landing page looks great on all devices and is minimal in design. Add
      what you want and deploy.
    </p>
    <Button>Get Early Access</Button>
    <div style={{margin: 60, width: "250px", position: "relative"}}>
      <div style={{clipPath: "inset(2% 5% round 2% 5%)"}}>
        <MockupContent />
      </div>
      <div style={{position: "absolute", width: "250px", top: 0}}>
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
