import React from "react"

import '../styles/side-drawer.css'

const SideDrawer = props => (
	<nav className="side-drawer">
		<ul>
			<li><a href="/">About</a></li>
			<li><a href="/">Courses</a></li>
			<li><a href="/">Careers</a></li>
		</ul>
	</nav>
);

export default SideDrawer