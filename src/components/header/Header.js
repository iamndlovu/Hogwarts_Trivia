import React from 'react';
import AppLogo from './AppLogo';

const headerStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "2rem",
	fontFamily: "'Great Vibes', cursive",
	fontWeight: "500",
	background: "#112d4e",
	color: "#dbe2ef"
};

const Header = ({appLogo, appName}) => {
	return (
		<header className='Header' style={ headerStyle }>
			<AppLogo logoImg={ appLogo } />
			{appName}
		</header>
	)
}

export default Header