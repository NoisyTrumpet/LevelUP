import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import downPad from "../images/padDown.png"

import "../styles/downPad.css"

const DownPad = ({ children }) => (
  <a href="#about" target="_blank">
  <img src={downPad} className="dPad"/>
  </a>
)

export default DownPad
