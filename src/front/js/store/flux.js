const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			dataPeople: [],
			dataPlanets: [],
			dataSpecies: [],
			dataStarships: [],
			dataVehicles: [],
			detailsPeople: {}
		},
		actions: {
			getDataPeople: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people");

					const data = await response.json();

					//Para poder meter el item como favorito

					let formattedCharacters = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataPeople: formattedCharacters });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDataPlanets: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets");

					const data = await response.json();

					let formattedPlanets = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataPlanets: formattedPlanets });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDataSpecies: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/species");

					const data = await response.json();

					let formattedSpecies = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataSpecies: formattedSpecies });
				} catch (error) {
					console.error(`error from database -- ${error}`);
				}
			},

			getDataStarships: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/starships");

					const data = await response.json();

					let formattedStarships = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataStarships: formattedStarships });
				} catch (error) {
					console.error(`error from database -- ${error}`);
				}
			},

			getDataVehicles: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/vehicles");

					const data = await response.json();

					let formattedVehicles = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataVehicles: formattedVehicles });
				} catch (error) {
					console.error(`error from database -- ${error}`);
				}
			},

			getPeople: async id => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/people/${id}`);

					const data = await response.json();

					const data_detailsPeople = data.result;

					console.log("Detalles del personaje seleccionado desde Flux - ", data_detailsPeople);

					setStore({ detailsPeople: data_detailsPeople });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			}
		}
	};
};

export default getState;
