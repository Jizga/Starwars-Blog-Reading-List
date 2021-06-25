import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function Character() {
	const { uid } = useParams();
	const { store, actions } = useContext(Context);

	// actions.getPeople(uid);

	return (
		<>
			{/* {store.dataPeople.map(character => { */}
			<div
				className="container text-white"
				// key={character.uid}
			>
				<div className="row">
					<div className="col-4">
						<img src="" />
					</div>
					<div className="col-8">
						<h2>Nombre del personaje</h2>
						<p>Descripción del personaje</p>
					</div>
				</div>

				<hr />
				<div className="row">
					<p>Detalles del personaje</p>
				</div>
			</div>
			;{/* })} */}
		</>
	);
}
