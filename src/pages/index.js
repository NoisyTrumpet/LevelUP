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
/*import SideDrawer from "../components/side-drawer"
import Backdrop from "../components/backdrop"*/
import Center from "../components/center"


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
    {/*<SideDrawer />
    <Backdrop />*/}
    <Hero />
    <Center />
    <About />
    <Center />
    <Courses />
    <Center />
    <Federal />
    <Center />
    <CallToAction />
    <Center />
    <Contact />
  </Layout>
)

export default IndexPage
