import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";
// import StarWars from "../../img/StarWars.png";

import "../../styles/Characters.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from "react-bootstrap/Carousel";

export function Characters() {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.dataPeople.map(character => {
				return (
					<div key={character.uid} className="col-md-3">
						<Card id={character.uid} name={character.name} url={character.url} />
					</div>
				);
			})}
		</>

		// <Carousel>
		// 	{store.dataPeople.map(character => {
		// 		return (
		// 			<Carousel.Item key={character.uid}>
		// 				<img src={StarWars} alt={character.name} id="imgCarousel" />
		// 				<Carousel.Caption>
		// 					<h3>{character.name}</h3>
		// 					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		// 					{/* <Card id={character.uid} name={character.name} url={character.url} /> */}
		// 				</Carousel.Caption>
		// 			</Carousel.Item>
		// 		);
		// 	})}
		// </Carousel>
	);
}
