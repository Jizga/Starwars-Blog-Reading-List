import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Characters } from "../component/Characters";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Characters />
		</div>
	);
};
