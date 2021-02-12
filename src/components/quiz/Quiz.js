import React from "react";
import Stats from "./Stats";
import QuestionContainer from "./QuestionContainer.js";

const quizStyle = {
	background: "#ffd7003d",
	minHeight: "calc(100vh - 5rem - 2rem)",
	padding: "1rem",
};

const Quiz = ({ quizData, handleClick }) => {
	const { stats, quizQuestions } = quizData;

	return (
		<main className="Quiz" style={quizStyle}>
			<Stats
				stats={ stats }
			/>
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				paddingTop: "1rem",
				minHeight: "calc(100vh - 14rem)"
			}}>
				<QuestionContainer questionAndOptions={ quizQuestions[stats.questionNo - 1] } handleClick={ handleClick } />
			</div>
		</main>
	);
};

export default Quiz;