import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sw-white.png";

import "../../styles/myNavbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const MyNavbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="myNav">
			<Container id="myContainerNB">
				<Link to="/">
					<img id="logo" src={logo} />
				</Link>
				<Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
					<Nav className="me-auto ">
						<NavDropdown
							title="Favourites"
							id="collasible-nav-dropdown"
							className="btn btn-outline-warning">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
