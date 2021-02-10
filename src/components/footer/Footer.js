import React from 'react'

const Footer = ({ appName }) => {
	return (
		<footer style={{
			background: "#dbe2ef",
			width: "100%",
			height: "2rem",
			textAlign: "center"
		}}>
			&copy;{ `${new Date().getFullYear()} ${appName}` } 
		</footer>
	)
}

export default Footer;