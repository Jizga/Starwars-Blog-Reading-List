import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Starships() {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.dataStarships.map(starship => {
				return (
					<div key={starship.uid} className="col-md-3">
						<Card
							id={starship.uid}
							name={starship.name}
							url={starship.url}
							addFavourite={actions.addFavourite}
						/>
					</div>
				);
			})}
		</>
	);
}
