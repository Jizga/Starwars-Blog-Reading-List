import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sw-white.png";

import "../../styles/myNavbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { FavouritesList } from "./FavouritesList";
import { Context } from "../store/appContext";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const MyNavbar = () => {
	const { store } = useContext(Context);

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
							{/* No aparece la lista de los elementos seleccionados como favoritos */}

							{store.dataPeople.map((item, i) => {
								<NavDropdown.Item href={`#action/${i}`} key={item.uid}>
									<FavouritesList id={item.uid} name={item.name} url={item.url} />
								</NavDropdown.Item>;
							})}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
