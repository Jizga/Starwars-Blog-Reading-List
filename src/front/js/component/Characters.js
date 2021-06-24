import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

export function Characters() {
	const { store, actions } = useContext(Context);
	// console.log("store en characters -- ", store);
	console.log("characters ==>", store.dataPeople);

	return (
		<div>
			{store.dataPeople.map(character => {
				<div key={character.uid}>
					<Card id={character.uid} name={character.name} url={character.url} />
				</div>;
			})}
		</div>
	);
}
