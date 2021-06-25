import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import StarWars from "../../img/StarWars.png";
import "../../styles/card.scss";

export function Card(props) {
	const [favourite, setFavourite] = useState([]);
	const { actions } = useContext(Context);

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
						<button className="btn btn-outline-primary" onClick={() => actions.getPeople(props.id)}>
							Show more
						</button>
					</Link>

					<button className="btn icon">
						<i
							className="fas fa-heart fa-lg"
							onClick={() => {
								props.addFavourite(props.id, props);

								//No lo coge
								setFavourite(favourite => [...favourite, props]);

								console.log("Favoritos --> ", favourite);
							}}
						/>
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
