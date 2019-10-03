import React from "react"

import BodyLine from "../images/bodyLine.png"
import Email from "../images/icons/emailIcon.svg"

import "../styles/contact.css"

const Contact = () => (
<div className="contact">
  <div >

    <div className="contactInfo contactCont">
      <h3>Get in Touch</h3>
        <ul>
          <li><img src={Email} alt="" className="emailIcon" />AFLCMC.HNCP.LevelUP@us.af.mil</li>
        </ul>
    </div>

  </div>

  <img src={BodyLine} alt="" className="contactLine" />

</div>

)

export default Contact