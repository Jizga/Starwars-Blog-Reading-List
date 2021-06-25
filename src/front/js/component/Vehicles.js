import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

import "../../styles/Characters.scss";

export function Vehicles() {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.dataVehicles.map(vehicle => {
				return (
					<div key={vehicle.uid} className="col-md-3">
						<Card
							id={vehicle.uid}
							name={vehicle.name}
							url={vehicle.url}
							addFavourite={actions.addFavourite}
						/>
					</div>
				);
			})}
		</>
	);
}
