import React from "react";
import brFlag from "../../assets/brazil-flag.png";
import usFlag from "../../assets/us-flag.png";

const I18nFlags = props => {
	return (
		<>
			<img
				src={brFlag}
				onClick={() => props.changeLanguage("pt")}
				alt="Brazil Flag"
				className="flag"
			/>
			<img
				src={usFlag}
				onClick={() => props.changeLanguage("en")}
				alt="US Flag"
				className="flag"
			/>
		</>
	);
};

export default I18nFlags;
