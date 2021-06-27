import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../img/sw-white.png";

import "../../styles/myNavbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Context } from "../store/appContext";

export const MyNavbar = () => {
	const { store, actions } = useContext(Context);

	// console.log("Lista de favoritos en Navbar : ", store.favourites);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between" id="myNav">
			<Link to="/">
				<img id="logo" src={logo} />
			</Link>

			<div className="dropdown myDropdown">
				<button
					className="btn btn-outline-warning dropdown-toggle pl-5 pr-5"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favourites
				</button>
				<div className="dropdown-menu myFavourites" aria-labelledby="dropdownMenuButton">
					<ul className="text-warning">
						{store.favourites.length > 0 ? (
							store.favourites.map(item => {
								return (
									<li
										key={item.uid}
										className="dropdown-item text-warning d-flex justify-content-between align-items-center">
										<Link to={item.url}>{item.name}</Link>

										<i
											className="far fa-trash-alt"
											//Función preprada para cuando aparezcan los elementos en el navbar -.-
											//
											// onClick={actions.deleteFavourite(item.url, store.favourites)}
										/>
									</li>
								);
							})
						) : (
							<p className="pl-3">You do not have any favourite</p>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
