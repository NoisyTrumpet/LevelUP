import React from "react"
import PropTypes from "prop-types"

// import { COLORS } from "../styles/constants"
import Logo from "../images/LevelUp-Logo.png"

import "../styles/footer.css"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footMain">
      <img src={Logo} alt="" />
    </div>
    <div className="footSocial">
      <img src={Logo} alt="" />
      <img src={Logo} alt="" />
      <img src={Logo} alt="" />
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
