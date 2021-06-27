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

			<div className="dropdown">
				<button
					className="btn btn-outline-warning dropdown-toggle myBtn"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favourites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<ul className="bg-info">
						{store.favourites.length > 0 ? (
							store.favourites.map(item => {
								<Link
									key={item.uid}
									className="dropdown-item bg-danger d-flex justify-content-between"
									to={item.url}>
									{/* Si aparece por consola */}

									{item.name}
									{console.log("item.name en Navbar -- ", item.name)}

									<i
										className="far fa-trash-alt"
										//Función preprada para cuando aparezcan los elementos en el navbar -.-
										//
										// onClick={actions.deleteFavourite(item.url, store.favourites)}
									/>
								</Link>;
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
