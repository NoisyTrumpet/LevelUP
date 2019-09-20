import React from "react"

import BodyLine from "../images/bodyLine.png"

import "../styles/contact.css"

const Contact = () => (
<div className="contact">
  <div className="contactMain">

    <div className="contactInfo contactCont">
      <h3>Get in Touch</h3>
        <ul>
          <li>AFLCMC.HNCP.LevelUP@us.af.mil</li>
        </ul>
    </div>

    <div className="contactLocation contactCont">
      <h3>Press Inquiries</h3>
        <ul>
          <li>press.LevelUP@us.af.mil</li>
        </ul>

    </div>

  </div>

  <img src={BodyLine} alt="" className="contactLine" />

</div>

)

export default Contact