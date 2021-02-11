import React from 'react';

const optionStyle = {
	marginBottom: "1rem",
	background: "#f9f7f7",
	borderRadius: "5px",
	padding: "7px",
	cursor: "pointer"
};

const Option = ({option}) => {
	return (
		<p className="Option" style={optionStyle} onClick={()=>console.log(true)}>
			{ option.text }
		</p>
	)
}

export default Option