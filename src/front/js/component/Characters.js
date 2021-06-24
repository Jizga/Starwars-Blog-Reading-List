import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Characters() {
	const { store } = useContext(Context);

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
	);
}
