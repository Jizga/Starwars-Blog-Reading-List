import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Characters() {
	const { store, actions } = useContext(Context);

	const addFavourite = characterId => {
		store.dataPeople.map(
			character => (character.uid === characterId ? (character.favorite = true) : (character.favorite = false))
		);
	};

	return (
		<>
			{store.dataPeople.map(character => {
				return (
					<div key={character.uid} className="col-md-3">
						<Card
							id={character.uid}
							name={character.name}
							url={character.url}
							favorite={character.favorite}
							addFavourite={addFavourite}
							getPeople={actions.getPeople(character.uid)}
						/>
					</div>
				);
			})}
		</>
	);
}
