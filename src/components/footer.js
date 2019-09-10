import React from "react"
import PropTypes from "prop-types"

// import { COLORS } from "../styles/constants"
import Facebook from "../images/icons/facebook.svg"
import Instagram from "../images/icons/instagram.svg"
import Twitter from "../images/icons/twitter.svg"
import Linkedin from "../images/icons/linkedin.svg"
import Logo from "../images/LevelUP-Logo.png"

import "../styles/footer.css"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footMain">
      <img src={Logo} alt="" />
    </div>
    <div className="footSocial">
      <img src={Facebook} alt="" />
      <img src={Instagram} alt="" />
      <img src={Twitter} alt="" />
      <img src={Linkedin} alt="" />
    </div>
    <div className="footerLinks">
      <ul className="footerLinks1">
        <li><a href="/">RSS</a></li>
        <li><a href="/">IG</a></li>
        <li><a href="/">FOIA</a></li>
        <li><a href="/">SAPR</a></li>
        <li><a href="/">USA.gov</a></li>
        <li><a href="/">Accessibility</a></li>
        <li><a href="/">AF Sites</a></li>
      </ul>
      <ul className="footerLinks2">
        <li><a href="/">Link Disclaimer</a></li>
        <li><a href="/">AF Executive Fleet</a></li>
        <li><a href="/">No FEAR Act</a></li>
        <li><a href="/">Strategic APR</a></li>
        <li><a href="/">Suicide Prevention</a></li>
        <li><a href="/">EEO</a></li>
      </ul>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
