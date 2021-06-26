import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";

import "../../styles/details.scss";
import clone from "../../img/clone-white.png";
import { useParams } from "react-router-dom";

export function DetailsVehicle() {
	const { store, actions } = useContext(Context);

	//***** Para que a la hora de recargar la pagina no se pierdan los datos */
	let { uid } = useParams();

	useEffect(() => {
		actions.getDetailsVehicle(uid);
	}, []);

	return (
		<div className="container text-white myBox">
			{store.detailsVehicle.properties ? (
				<div>
					<div className="row">
						<div className="col-4">
							<img src={clone} id="imgCharacter" />
						</div>
						<div className="col-8">
							<h2>{store.detailsVehicle.properties.name}</h2>

							<p>{store.detailsVehicle.description}</p>
						</div>
					</div>

					<hr className="bg-white" />
					<div className="row">
						<p>Detalles del personaje</p>
						{Object.entries(store.detailsVehicle.properties).map(
							// Drale formato
							property => `${property[0]}: ${property[1]}`
						)}
					</div>
				</div>
			) : (
				<div className="text-center text-warning mt-5">
					<i className="fas fa-spinner fa-pulse fa-6x" />
				</div>
			)}
		</div>
	);
}
