import React from "react"

// import Button from "../components/button"
// import SectionHeader from "./section-header"

import BodyLine from "../images/bodyLine.png"

import "../styles/contact.css"

const Contact = () => (
<div className="contact">
  <div className="contactMain">
  
    <div className="contactForm contactCont">
      <h3>Contact Us</h3>
      <form action="/" target="_self">
        <input type="text" name="name" value="Name" /><br />
        <input type="text" name="phonenumber" value="Phone Number" /><br />
        <input type="text" name="email" value="Email" /><br />
        <textarea name="message" style={{width: `70%`, height:150}}>
            The cat was playing in the garden.
        </textarea><br />
        <input type="submit" value="Submit" />
      </form>
    </div>

    <div className="contactInfo contactCont">
      <h3>Get in Touch</h3>
        <ul>
          <li>(210) 777-6767</li>
          <li>contact@levelup.af.mil</li>
        </ul>
    </div>

    <div className="contactLocation contactCont">
      <h3>Where we are</h3>
        <ul>
          <li>500 Navarro St.<br />San Antonio, TX 78205</li>
        </ul>

    </div>

  </div>

  <img src={BodyLine} alt="" className="contactLine" />

</div>

)

export default Contact