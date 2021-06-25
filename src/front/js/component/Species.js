import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Species() {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.dataSpecies.map(specie => {
				return (
					<div key={specie.uid} className="col-md-3">
						<Card id={specie.uid} name={specie.name} url={specie.url} addFavourite={actions.addFavourite} />
					</div>
				);
			})}
		</>
	);
}
