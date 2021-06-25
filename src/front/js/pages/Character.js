import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/character.scss";
import clone from "../../img/clone-white.png";

export function Character() {
	const { uid } = useParams();

	const { store } = useContext(Context);

	return (
		<div className="container text-white myBox">
			{store.detailsPeople.properties ? (
				<div>
					<div className="row">
						<div className="col-4">
							<img src={clone} id="imgCharacter" />
						</div>
						<div className="col-8">
							<h2>{store.detailsPeople.properties.name}</h2>

							<p>{store.detailsPeople.description}</p>
						</div>
					</div>

					<hr className="bg-white" />
					<div className="row">
						<p>Detalles del personaje</p>
						{Object.entries(store.detailsPeople.properties).map(
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
