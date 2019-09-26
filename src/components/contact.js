import React from "react"

import BodyLine from "../images/bodyLine.png"
import Email from "../images/icons/emailIcon.svg"
import Press from "../images/icons/pressIcon.svg"

import "../styles/contact.css"

const Contact = () => (
<div className="contact">
  <div className="contactMain">

    <div className="contactInfo contactCont">
      <h3>Get in Touch</h3>
        <ul>
          <li><img src={Email} alt="" className="emailIcon" />AFLCMC.HNCP.LevelUP@us.af.mil</li>
        </ul>
    </div>

    <div className="contactLocation contactCont">
      <h3>Press Inquiries</h3>
        <ul>
          <li><img src={Press} alt="" className="emailIcon" />press.LevelUP@us.af.mil</li>
        </ul>

    </div>

  </div>

  <img src={BodyLine} alt="" className="contactLine" />

</div>

)

export default Contact