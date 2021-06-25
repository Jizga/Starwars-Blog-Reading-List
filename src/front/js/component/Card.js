import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import StarWars from "../../img/StarWars.png";
import "../../styles/card.scss";

export function Card(props) {
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
						<button className="btn btn-outline-primary">Show more</button>
					</Link>

					<button className="btn icon">
						<i className="fas fa-heart fa-lg" onClick={() => props.addFavourite(props.id, props)} />
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
	addFavourite: PropTypes.func
};
