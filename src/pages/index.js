import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"
import Navbar from "../components/navbar"
/*import SideDrawer from "../components/side-drawer"
import Backdrop from "../components/backdrop"*/


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
    <Content />
    <CallToAction />
  </Layout>
)

export default IndexPage
