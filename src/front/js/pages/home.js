import React, { useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { Species } from "../component/Species";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{/* <div className="alert alert-info">{store.dataPeople || "Loading data ..."}</div> */}
			<div className="container">
				<h3 className="text-white text-left mb-4">Characters</h3>
				<div className="d-flex flex-row myScroll">
					<Characters />
				</div>
			</div>

			<div className="container">
				<h3 className="text-white text-left mb-4">Planets</h3>
				<div className="d-flex flex-row myScroll">
					<Planets />
				</div>
			</div>

			<div className="container">
				<h3 className="text-white text-left mb-4">Species</h3>
				<div className="d-flex flex-row myScroll">
					<Species />
				</div>
			</div>
		</div>
	);
};
