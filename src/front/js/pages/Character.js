import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
// , { useContext }
// import { Context } from "../store/appContext";

export function Character(props) {
	// const { store, actions } = useContext(Context);

	let { uid } = useParams();

	console.log("props desde detalle del ersonaje", props);

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<img src="" />
				</div>
				<div className="col-8">
					<h2>{uid}</h2>
					<p>Descripción del personaje</p>
				</div>
			</div>

			<hr />
			<div className="row">
				<p>Detalles del personaje</p>
			</div>
		</div>
	);
}

// Character.propTypes = {
// 	url: PropTypes.string,
// 	id: PropTypes.string
// };
