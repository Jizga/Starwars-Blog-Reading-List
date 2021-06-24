import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Card(props) {
	console.log("props de Card", props);

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
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
