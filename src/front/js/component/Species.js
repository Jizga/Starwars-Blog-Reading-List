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
							//Para ir al perfil del elemento seleccionado
							showDetails={actions.getDetailsSpecie}
							category="/species/"
							//Para añadir a favoritos
							addFavourite={actions.addFavourite}
							data={store.dataSpecies}
							favouritesArr={store.favourites}
						/>
					</div>
				);
			})}
		</>
	);
}
