import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

export function Characters() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.dataPeople.map(character => {
				return (
					<div key={character.uid} className="d-flex">
						<Card id={character.uid} name={character.name} url={character.url} />
					</div>
				);
			})}
		</div>
	);
}
