import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import StarWars from "../../img/StarWars.png";

export function Card(props) {
	return (
		<div className="card">
			<img className="card-img-top" src={StarWars} alt={props.name} />

			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card content.
				</p>
				<Link to={props.url}>
					{/* Habría que pasarle un id */}
					<button className="btn btn-primary">Show more</button>
				</Link>
			</div>
		</div>
	);
}

Card.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string
};
