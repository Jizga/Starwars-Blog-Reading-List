import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Planets() {
	const { store, actions } = useContext(Context);

	const addFavourite = planetId => {
		store.dataPlanets.map(planet => (planet.uid === planetId ? (planet.favorite = true) : planet.favorite));
	};

	return (
		<>
			{store.dataPlanets.map(planet => {
				return (
					<div key={planet.uid} className="col-md-3">
						<Card
							id={planet.uid}
							name={planet.name}
							url={planet.url}
							favorite={planet.favorite}
							addFavourite={addFavourite}
							showDetails={actions.getDetailsPlanet}
							category="/planets/"
						/>
					</div>
				);
			})}
		</>
	);
}
