import React from "react"
import PropTypes from "prop-types"
import { COLORS } from "../styles/constants"
import DownPad from "../components/downPad"
import heroImage from "../images/heroBack.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"
import HeroLine from "../images/heroLine.png"

import '../styles/hero.css'

const Header = ({ siteTitle }) => (
  <div style={{
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      padding: "4rem 1rem",
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
    <div className="heroCont">
        <h1 className="heroTitle" style={{color: COLORS.levelUpBlue}}>
        Be Bold<br/><span className="heroTitleBig">Act Now</span></h1>
        <img src={HeroLine} className="heroDivide" />
        <p style={{textAlign: "left", maxWidth: 480, fontFamily: "azo-sans-web"}}>
          At <strong>LevelUP</strong>, we're helping take on some of America's most immediatee cyber threats, 
          combining commercial capabilities and DoD resources to create solutions that are agile, 
          interoperable, and rapidly deployable, ensuring our enemies operate on anything but a level playing field.
        </p>

        <div style={{textAlign: "center", marginTop: 50}}>
        <DownPad />
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
