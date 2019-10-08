import React from "react"
import $ from "jquery"

// import DrawerToggle from "./drawer-toggle"
import NavLine from "../images/navLine.png"
import Logo from "../images/LevelUp-Logo.png"
import { Link } from "gatsby"

// import * as Scroll from 'react-scroll';

import '../styles/navbar.css'

const Navbar = () => (

  // $(window).scroll(function(){
  //   $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  // }),

  $(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
      scrollTop = $(window).scrollTop();
      $('.counter').html(scrollTop);

      if (scrollTop >= 100) {
        $('.toolbar').addClass('scrolled');
      } else if (scrollTop < 100) {
        $('.toolbar').removeClass('scrolled');
      }
    });
  }),

  $(document).ready(function () {
    $('a[rel="relativeanchor"]').click(function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      return false;
    });
  }),
 
  <header className="toolbar">
    <nav className="toolbar_nav">

      <div id="MobileMenu" className="mNav" tabIndex="0">
        <div className="mNav-dropdown" id="top">
          <a id="toAbout" rel="relativeanchor" href="#targetAbout">About</a>
          <a id="toCollaborate" rel="relativeanchor" href="#targetCollaborate">Collaborate</a>
          <a id="toContact" rel="relativeanchor" href="#targetContact">Contact</a>
        </div>
      </div>

      <div className="toolbar_logo"><a href="/"><img src={Logo} alt="" /></a></div>
      <div className="spacer"><img src={NavLine} className="navDivide" alt="" /></div>
      
      <div id="DesktopMenu" className="toolbar_nav_items">
        <ul>
          <li><a id="toAbout" rel="relativeanchor" href="#targetAbout">About</a></li>
          <li><a id="toCollaborate" rel="relativeanchor" href="#targetCollaborate">Collaborate</a></li>
          <li><a id="toContact" rel="relativeanchor" href="#targetContact">Contact</a></li>
        </ul>
      </div>

    </nav>
  </header>
);


export default Navbar
