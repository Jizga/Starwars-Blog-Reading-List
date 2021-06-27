import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sw-white.png";

import "../../styles/myNavbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { FavouritesList } from "./FavouritesList";
import { Context } from "../store/appContext";

export const MyNavbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between" id="myNav">
			<Link to="/">
				<img id="logo" src={logo} />
			</Link>

			<div className="dropdown">
				<button
					className="btn btn-outline-warning dropdown-toggle myBtn"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown button
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</nav>
	);
};
