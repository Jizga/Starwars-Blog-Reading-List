import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Starships() {
	const { store, actions } = useContext(Context);

	const addFavourite = starshipId => {
		store.dataStarships.map(
			starship => (starship.uid === starshipId ? (starship.favorite = true) : (starship.favorite = false))
		);
	};

	return (
		<>
			{store.dataStarships.map(starship => {
				return (
					<div key={starship.uid} className="col-md-3">
						<Card
							id={starship.uid}
							name={starship.name}
							url={starship.url}
							favorite={starship.favorite}
							addFavourite={addFavourite}
							showDetails={actions.getDetailsStarship}
							category="/starships/"
						/>
					</div>
				);
			})}
		</>
	);
}
