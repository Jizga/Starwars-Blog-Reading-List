import React from "react";
import { useParams } from "react-router-dom";

export function Character() {
	//No funciona
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<img src="" />
				</div>
				<div className="col-8">
					<h2>{store.dataPeople[params.uid].name}</h2>
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
