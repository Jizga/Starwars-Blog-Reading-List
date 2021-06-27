import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";

import "../../styles/details.scss";
import robots from "../../img/robots.png";
import { useParams } from "react-router-dom";

export function DetailsSpecie() {
	const { store, actions } = useContext(Context);

	//***** Para que a la hora de recargar la pagina no se pierdan los datos */
	let { uid } = useParams();

	useEffect(() => {
		actions.getDetailsSpecie(uid);
	}, []);

	// //* ==== Se repiten los detalles al ratito de estar en la página. Es como si se llamaran los detallas cada x segundos desde la API.
	// Al recargar la página se soluciona ==== */
	//
	const splitDetailsFirstPart = obj => {
		let firstPart = Object.entries(obj)
			.slice(0, Object.entries(obj).length / 2)
			.map(property => {
				return (
					<li key={Date.now()} className="col-12 text-danger list-unstyled">
						{property[0]}: {property[1]}
					</li>
				);
			});

		return <ul className=" col-6">{firstPart}</ul>;
	};

	const splitDetailsSecondPart = obj => {
		let secondPart = Object.entries(obj)
			.slice(Object.entries(obj).length / 2, Object.entries(obj).length)
			.map(property => {
				return (
					<li key={Date.now()} className="col-12 text-danger list-unstyled">
						{property[0]}: {property[1]}
					</li>
				);
			});

		return <ul className=" col-6">{secondPart}</ul>;
	};

	return (
		<div className="container text-white">
			{store.detailsSpecie.properties ? (
				<div className="myBox">
					<div className="row">
						<div className="col-4">
							<img src={robots} id="imgCharacter" />
						</div>
						<div className="col-8">
							<h2>{store.detailsSpecie.properties.name}</h2>

							<p>{store.detailsSpecie.description}</p>
						</div>
					</div>

					<hr className="bg-white" />
					<div className="row d-flex">
						{
							// //* ==== Se repiten los detalles al ratito de estar en la página. Es como si se llamaran los detallas cada x segundos desde la API.
							// Al recargar la página se soluciona ==== */
							//
						}

						{/* <ul className=" col-6">
							{Object.entries(store.detailsSpecie.properties)
								.slice(0, Object.entries(store.detailsSpecie.properties).length / 2)
								.map(property => {
									return (
										<li key={Date.now()} className="col-12 text-danger list-unstyled">
											{property[0]}: {property[1]}
										</li>
									);
								})}
						</ul> */}

						{splitDetailsFirstPart(store.detailsSpecie.properties)}

						{/* <ul className=" col-6">
							{Object.entries(store.detailsSpecie.properties)
								.slice(
									Object.entries(store.detailsSpecie.properties).length / 2,
									Object.entries(store.detailsSpecie.properties).length
								)
								.map(property => {
									return (
										<li key={Date.now()} className="col-12 text-danger list-unstyled">
											{property[0]}: {property[1]}
										</li>
									);
								})}
						</ul> */}

						{splitDetailsSecondPart(store.detailsSpecie.properties)}
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
