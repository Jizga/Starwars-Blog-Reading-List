import React from "react";

export function Character() {
	// Este componente necesita el id del personaje seleccionado
	return (
		<div className="container">
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
	);
}
