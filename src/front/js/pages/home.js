import React, { useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Characters } from "../component/Characters";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			{/* <div className="alert alert-info">{store.dataPeople || "Loading data ..."}</div> */}

			<div className="mt-5">
				<h3 className="text-white text-left mb-4">Characters</h3>
				<Characters />
			</div>
		</div>
	);
};
