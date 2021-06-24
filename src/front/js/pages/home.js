import React, { useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Characters } from "../component/Characters";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{/* <div className="alert alert-info">{store.dataPeople || "Loading data ..."}</div> */}
			<div className="container">
				<h3 className="text-white text-left mb-4">Characters</h3>
				<div className="row">
					<Characters />
				</div>
			</div>
		</div>
	);
};
