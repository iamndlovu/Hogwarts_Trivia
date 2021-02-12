import React from "react";
import Question from "./Question.js";
import Options from "./Options.js";

const containerStyle = {
	background: "#3f72af",
	width: "100%",
	minHeight: "10rem",
	padding: "15px 7px",
	textAlign: "left",
	borderRadius: "11px",
};

const QuestionContainer = ({ questionAndOptions, handleClick }) => {
	const { question, options } = questionAndOptions;

	return (
		<div className="QuestionContainer" style={containerStyle}>
			<Question question={ question } />
			<br />
			<hr />
			<br />
			<Options options={ options } handleClick={ handleClick } />
		</div>
	);
};

export default QuestionContainer;