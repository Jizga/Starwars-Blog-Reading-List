import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sw-white.png";

import "../../styles/myNavbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
					Favourites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favourites.length > 0 ? (
						store.favourites.map(item => {
							// <Link key={item.uid} className="dropdown-item" to="/">
							// 	<p>
							// 		{item.name}
							// 		{console.log("item.name en Navbar -- ", item.name)}
							// 	</p>
							// </Link>;

							<p key={item.uid}>
								{item.name}
								{console.log("item.name en Navbar -- ", item.name)}
							</p>;
						})
					) : (
						<p className="pl-3">You do not have any favourite</p>
					)}
				</div>
			</div>
		</nav>
	);
};
