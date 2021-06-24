import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sw-logo-white.png";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark pl-5 pr-5 fixed-top">
			<Link to="/">
				<img id="logo" src={logo} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
