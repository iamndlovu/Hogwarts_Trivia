import React from 'react'

const Footer = ({ appName }) => {
	return (
		<footer style={{
			background: "#dbe2ef",
			position: "fixed",
			bottom: 0,
			left: 0,
			width: "100%",
			textAlign: "center"
		}}>
			&copy;{ `${new Date().getFullYear()} ${appName}` } 
		</footer>
	)
}

export default Footer;