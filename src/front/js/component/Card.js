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
				<h5 className="card-title text-center">{props.name}</h5>

				<div className="d-flex justify-content-around">
					<Link to={`${props.category}${props.id}`}>
						<button className="btn btn-outline-primary" onClick={() => props.showDetails(props.id)}>
							Show more
						</button>
					</Link>

					<button
						className="btn icon"
						//Para que solo haya una "Card" es necesario pasarle a la función de añadir favoritos
						// el data al que se refiere, "dataPeople", "dataPlanets", etc,
						//El id del elemento seleccionado y el array de la lista de favoritos

						// onClick={() => props.addFavourite(props.data, props.id, props.favouritesArr)}

						onClick={() => props.addFavourite(props.data, props.url, props.favouritesArr)}>
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
	addFavourite: PropTypes.func,
	showDetails: PropTypes.func,
	category: PropTypes.string,
	data: PropTypes.array,
	favouritesArr: PropTypes.array
};
