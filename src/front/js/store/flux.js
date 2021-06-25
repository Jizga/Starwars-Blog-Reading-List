const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			dataPeople: [],
			dataPlanets: [],
			dataSpecies: [],
			dataStarships: [],
			dataVehicles: [],
			detailsPeople: {},
			favouritesList: []
		},
		actions: {
			getDataPeople: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people");

					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					} else {
						const data = await response.json();

						// const total_pages = (data.total_pages = 82);

						// console.log("total_pages : ", total_pages);

						const data_People = data.results;

						setStore({ dataPeople: data_People });
					}
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDataPlanets: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets");

					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					} else {
						const data = await response.json();

						const data_Planets = data.results;

						setStore({ dataPlanets: data_Planets });
					}
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDataSpecies: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/species");

					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					} else {
						const data = await response.json();

						const data_Species = data.results;

						setStore({ dataSpecies: data_Species });
					}
				} catch (error) {
					console.error(`error from database -- ${error}`);
				}
			},

			getDataStarships: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/starships");

					if (!response.ok) {
						throw new Error(`HTTP error! statutus: ${response.status}`);
					} else {
						const data = await response.json();
						const data_Starships = data.results;

						setStore({ dataStarships: data_Starships });
					}
				} catch (error) {
					console.error(`error from database -- ${error}`);
				}
			},

			getDataVehicles: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/vehicles");

					if (!response.ok) {
						throw new Error(`HTTP error! statutus: ${response.status}`);
					} else {
						const data = await response.json();
						const data_Vehicles = data.results;

						setStore({ dataVehicles: data_Vehicles });
					}
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
			},

			addFavourite: (idItem, item) => {
				//get the store
				const store = getStore();

				return store.dataPeople.filter(
					people => (people.uid === idItem ? setStore({ favouritesList: item }) : null)
				);
			}
		}
	};
};

export default getState;
