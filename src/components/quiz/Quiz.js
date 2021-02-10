import React from "react";
import Stats from "./Stats";
import QuestionContainer from "./QuestionContainer.js";

const quizStyle = {
	background: "#f3f1f1",
	height: "calc(100vh - 5rem - 2rem)",
	padding: "1rem",
};

const Quiz = () => {
	return (
		<main className="Quiz" style={quizStyle}>
			<Stats
				stats={{ questionNo: 1, totalQuestions: 20, score: 0, highScore: 15 }}
			/>
			<br /> <hr />
			<QuestionContainer />
		</main>
	);
};

export default Quiz;