import React from "react";
import PropTypes from "prop-types";

export function FavouritesList(props) {
	console.log("props de FavouritesList -- ", props);

	//No sale ni por consolaaaaaa

	return <div>{props.name}</div>;
}

FavouritesList.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string
};
