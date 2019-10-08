import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"

// import { COLORS } from "../styles/constants"
import Logo from "../images/LevelUp-Logo.png"

import "../styles/footer.css"

const Footer = ({ siteTitle }) => (

  $(document).ready(function () {
    $('a[rel="relativeanchor"]').click(function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      return false;
    });
  }),

  <footer id="footer" className="footer">
    <div className="directUP">
      <a href="#top" rel="relativeanchor"><span className="paddImg padUP"></span></a>
      {/* <a href="#top" className="paddingImg padUP" id="bottom"></a> */}
    </div>

    <div className="footMain">
      <img src={Logo} alt="LevelUP Logo" />
    </div>
    <div style={{maxWidth: 500, margin: "auto"}}>
      <div className="footSocial">
        <a href="https://www.facebook.com/LevelUPCodeWorks"><span className="socialIcon faceBook"></span></a>
        <a href="https://www.instagram.com/levelup_cw/"><span className="socialIcon instaGram"></span></a>
        <a href="https://twitter.com/LevelUP_CW"><span className="socialIcon twitTer"></span></a>
        <a href="https://www.linkedin.com/company/23748736"><span className="socialIcon linkeDin"></span></a>
      </div>
    </div>
    <div className="footerLinks">
      <ul className="footerLinks1">
        <li><a href="https://www.af.mil/RSS/">RSS</a></li>
        <li><a href="https://www.afinspectorgeneral.af.mil">IG</a></li>
        <li><a href="https://www.foia.af.mil">FOIA</a></li>
        <li><a href="https://www.resilience.af.mil/SAPR/">SAPR</a></li>
        <li><a href="https://www.usa.gov">USA.gov</a></li>
        <li><a href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx">Accessibility</a></li>
        <li><a href="https://www.af.mil/AF-Sites/">AF Sites</a></li>
      </ul>
      <ul className="footerLinks2">
        <li><a href="/">Link Disclaimer</a></li>
        <li><a href="https://www.af.mil/Portals/1/documents/AF_Executive_Fleet.pdf">AF Executive Fleet</a></li>
        <li><a href="https://prhome.defense.gov/NoFear/">No FEAR Act</a></li>
        <li><a href="https://www.archives.gov/about/plans-reports/performance-accountability">Strategic APR</a></li>
        <li><a href="https://www.resilience.af.mil">Suicide Prevention</a></li>
        <li><a href="https://www.af.mil/Equal-Opportunity/">EEO</a></li>
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
