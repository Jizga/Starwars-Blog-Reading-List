import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import StarWars from "../../img/StarWars.png";
import "../../styles/card.scss";

export function Card(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="card myCard">
			<img className="card-img-top" src={StarWars} alt={props.name} />

			<div className="card-body">
				<h5 className="card-title text-center">{props.name}</h5>

				<div className="d-flex justify-content-around">
					<Link to={`/people/${props.id}`}>
						<button
							className="btn btn-outline-primary"
							//Hay que condicionar este botón según el tipo de Card que sea **************
							// onClick={() => props.getDetailsPeople(props.id)}
							onClick={() => actions.getDetailsPeople(props.id)}>
							Show more
						</button>
					</Link>

					<button className="btn icon" onClick={() => props.addFavourite(props.id)}>
						<i className="fas fa-heart fa-lg" />
					</button>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	favorite: PropTypes.bool,
	addFavourite: PropTypes.func
	// getDetailsPeople: PropTypes.object
};
