import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Characters } from "../component/Characters";

export const Home = () => {
	const { store, actions } = useContext(Context);

	console.log("Store en HOME ", store.dataPeople);

	return (
		<div className="text-center mt-5">
			{store.dataPeople.map(character => {
				<div key={character.uid}>
					<Characters />
				</div>;
			})}
		</div>
	);
};
