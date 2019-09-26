import React from "react"

// import DrawerToggle from "./drawer-toggle"
import NavLine from "../images/navLine.png"
import Logo from "../images/LevelUp-Logo.png"

import '../styles/navbar.css'

const Navbar = () => (

  // $(window).scroll(function(){
  //   $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  // });


  <header className="toolbar">
    <nav className="toolbar_nav">

      <div id="MobileMenu" className="mNav" tabindex="0">
        <div className="mNav-dropdown">
        <a href="/">About</a>
        <a href="/">Collabate</a>
        <a href="/">Careers</a>
        <a href="/">Contact</a>
        </div>
      </div>

      <div className="toolbar_logo"><a href="/"><img src={Logo} alt="" /></a></div>
      <div className="spacer"><img src={NavLine} className="navDivide" alt="" /></div>
      
      <div id="DesktopMenu" className="toolbar_nav_items">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Collabate</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>

    </nav>
  </header>
);


export default Navbar
