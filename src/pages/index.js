import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Courses from "../components/courses"
import Federal from "../components/federal"
import CallToAction from "../components/work"
import Navbar from "../components/navbar"
import Contact from "../components/contact"
// // import SideDrawer from "../components/side-drawer"
// // import Backdrop from "../components/backdrop"
// import Center from "../components/center"
import "animate.css/animate.min.css";


const IndexPage = () => (

	/*state = {
		sideDrawerOpen: false
	}

	drawerClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		});
	};*/


  <Layout>
  	{/*let SideDrawer;
  	let Backdrop;

		 {SideDrawer}
    {Backdrop}

  	if (this.state.sideDrawerOpen) {
  		SideDrawer = <SideDrawer />;
  		Backdrop = <Backdrop />
  	}*/}

    <SEO />
    <Navbar />
    <Hero />
    <About />
    <Courses />
    <Federal />
    <CallToAction />
    <Contact />
  </Layout>
)

export default IndexPage
