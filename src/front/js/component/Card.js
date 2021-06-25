import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import StarWars from "../../img/StarWars.png";
import "../../styles/card.scss";

export function Card(props) {
	const { store, actions } = useContext(Context);

	//Se carga muchisimas veces (???????)
	// useEffect(() => {
	// 	actions.getPeople(props.id);
	// }, []);

	// console.log("store.detailsPeople desde Card : ", store.detailsPeople);

	//Para añadir el personaje a la lista de favoritos
	const favoriteDetails = () => {
		if (props.favorite) {
			return <i className="fas fa-heart fa-lg" />;
		} else {
			return <i className="fas fa-heart fa-lg" />;
		}
	};

	return (
		<div className="card myCard">
			<img className="card-img-top" src={StarWars} alt={props.name} />

			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>

				{/* {Object.entries(store.detailsPeople.properties).map(char => {
					<p className="card-text" key={char.uid}>
						{`${property[0]}: ${property[1]}`}
					</p>;
				})} */}

				<div className="d-flex justify-content-around">
					<Link to={`/people/${props.id}`}>
						<button className="btn btn-outline-primary" onClick={() => actions.getPeople(props.id)}>
							Show more
						</button>
					</Link>

					<button className="btn icon">{favoriteDetails()}</button>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	favorite: PropTypes.bool
};
