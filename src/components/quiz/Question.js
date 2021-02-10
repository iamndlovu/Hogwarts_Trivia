import React from "react";

const Question = ({ question }) => {
	return (
		<p
			className="Question"
			style={{
				textAlign: "left",
				fontWeight: "500",
				color: "#f9f7f7",
			}}
		>
			{ question }
		</p>
	);
};

export default Question;