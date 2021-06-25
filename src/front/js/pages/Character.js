import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function Character() {
	const { uid } = useParams();
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.detailsPeople.properties ? (
				<div className="container text-white">
					<div className="row">
						<div className="col-4">
							<img src="" />
						</div>
						<div className="col-8">
							<h2>{store.detailsPeople.properties.name}</h2>

							<p>{store.detailsPeople.description}</p>
						</div>
					</div>

					<hr />
					<div className="row">
						<p>Detalles del personaje</p>
						{Object.entries(store.detailsPeople.properties).map(
							property => `${property[0]}: ${property[1]}`
						)}
					</div>
				</div>
			) : (
				"Loading..."
			)}
		</>
	);
}
