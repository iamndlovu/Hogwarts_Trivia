import React from "react";
import Question from "./Question.js";
import Options from "./Options.js";

const containerStyle = {
	background: "#3f72af",
	width: "100%",
	minHeight: "10rem",
	marginTop: "25%",
	padding: "15px 7px",
	textAlign: "left",
	borderRadius: "11px",
};

const QuestionContainer = () => {
	return (
		<div className="QuestionContainer" style={containerStyle}>
			<Question question={`Enim voluptate do tempor?`} />
			<br />
			<hr />
			<br />
			<Options />
		</div>
	);
};

export default QuestionContainer;