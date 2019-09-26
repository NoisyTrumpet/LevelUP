import React from "react"
import PropTypes from "prop-types"
import { COLORS } from "../styles/constants"
import DownPad from "../components/downPad"
import heroImage from "../images/heroBack.png"
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
        opacity: 1,
    }}/>
    <div className="heroCont">
        <h1 className="heroTitle" style={{color: COLORS.levelUpBlue}}>
        Be bold<br/><span className="heroTitleBig" style={{color: COLORS.levelUpPurple}}>Act Now</span><br/>Learn <span className="heroTitleSmall">and</span> Adapt</h1>
        <img src={HeroLine} className="heroDivide" alt="" />
        <p className="heroDes" style={{color: COLORS.darkGray}}>
          <strong>LevelUP Code Works</strong> is a U.S. Air Force software development outfit in San Antonio, Texas.
        </p>

    </div>

    <div style={{textAlign: "center", margin: "auto"}}>
        <DownPad />
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
