import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Planets() {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.dataPlanets.map(planet => {
				return (
					<div key={planet.uid} className="col-md-3">
						<Card id={planet.uid} name={planet.name} url={planet.url} addFavourite={actions.addFavourite} />
					</div>
				);
			})}
		</>
	);
}
