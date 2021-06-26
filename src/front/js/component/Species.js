import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Species() {
	const { store, actions } = useContext(Context);

	const addFavourite = specieId => {
		store.dataSpecies.map(
			specie => (specie.uid === specieId ? (specie.favorite = true) : (specie.favorite = false))
		);
	};

	return (
		<>
			{store.dataSpecies.map(specie => {
				return (
					<div key={specie.uid} className="col-md-3">
						<Card
							id={specie.uid}
							name={specie.name}
							url={specie.url}
							favorite={specie.favorite}
							addFavourite={addFavourite}
							showDetails={actions.getDetailsSpecie}
							category="/species/"
						/>
					</div>
				);
			})}
		</>
	);
}
