import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import StarWars from "../../img/StarWars.png";
import "../../styles/card.scss";

export function Card(props) {
	console.log("props.favorite en Card -- ", props.favorite);

	const { actions } = useContext(Context);

	// const [characterDetails, setCharacterDetails] = useState(undefined);

	// useEffect(() => {
	// 	getCharacterDetails(props.url);
	// }, []);

	// const getCharacterDetails = async url => {
	// 	try {
	// 		let response = await fetch(url);

	// 		const data = await response.json();

	// 		const data_detailsPeople = data.result;

	// 		setCharacterDetails(data_detailsPeople);
	// 	} catch (e) {
	// 		console.error(`error from database -- ${e}`);
	// 	}
	// };

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
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card content.
				</p>

				<div className="d-flex justify-content-around">
					<Link to={`/people/${props.id}`}>
						<button
							className="btn btn-outline-primary"
							onClick={() => actions.getPeople(props.id)}
							// onClick={() => getCharacterDetails(props.url)}
						>
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
