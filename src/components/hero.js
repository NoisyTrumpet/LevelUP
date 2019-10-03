import React from "react"
import PropTypes from "prop-types"
import { COLORS } from "../styles/constants"
import heroImage from "../images/heroBack.png"
import HeroLine from "../images/heroLine.png"
import ScrollAnimation from "react-animate-on-scroll"

import '../styles/hero.css'

const Header = ({ siteTitle }) => (
  <div className="heroMain">
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
        <ScrollAnimation animateIn="fadeIn">
          <h2 className="heroTitle" style={{color: COLORS.levelUpBlue}}>
          Be bold<br/><span className="heroTitleBig" style={{color: COLORS.levelUpPurple}}>Act Now</span><br/>Learn <span className="heroTitleSmall">and</span> Adapt</h2>
        </ScrollAnimation>
        <img src={HeroLine} className="heroDivide" alt="" />
        <h1 className="heroDes" style={{color: COLORS.darkGray}}>
          <strong>LevelUP Code Works</strong> is a U.S. Air Force software development outfit in San Antonio, Texas.
        </h1>

    </div>

    <div className="gradient">
      <div className="dwnPad">
      <span className="padImg padDwn"></span>
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
