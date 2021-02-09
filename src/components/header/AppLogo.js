import React from "react";

const logoStyle = {
	width: "100px",
	maxHeight: "100px",
	display: "inline-block"
};

const AppLogo = ({ logoImg }) => {
	return (
		<div className="AppLogo" style={logoStyle}>
			<img
				src={ logoImg }
				alt="App Logo"
				style={{ maxWidth: "100px", maxHeight: "100px" }}
			/>
		</div>
	);
};

export default AppLogo;