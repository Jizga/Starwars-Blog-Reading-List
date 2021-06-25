import React from "react";
import PropTypes from "prop-types";

export function FavouritesList(props) {
	console.log("props", props);

	return <div>{props}</div>;
}

FavouritesList.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string
};
