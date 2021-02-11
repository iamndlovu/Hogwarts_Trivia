import React from "react";
import Stats from "./Stats";
import QuestionContainer from "./QuestionContainer.js";

const quizStyle = {
	background: "#ffd7003d",
	height: "calc(100vh - 5rem - 2rem)",
	padding: "1rem",
};

const Quiz = () => {
	return (
		<main className="Quiz" style={quizStyle}>
			<Stats
				stats={{ questionNo: 1, totalQuestions: 20, score: 0, highScore: 15 }}
			/>
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "calc(100% - 5rem)"
			}}>
				<QuestionContainer />
			</div>
		</main>
	);
};

export default Quiz;