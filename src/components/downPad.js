import React from "react"

import downPad from "../images/padDown.png"

import "../styles/downPad.css"

const DownPad = ({ children }) => (
  <a href="#about" target="_blank">
  <img src={downPad} className="dPad" alt="" />
  </a>
)

export default DownPad
