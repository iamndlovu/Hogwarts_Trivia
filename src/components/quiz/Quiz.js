import React from "react";
import Stats from "./Stats";
import QuestionContainer from "./QuestionContainer.js";
import FinishedComp from "./FinishedComp";

const quizStyle = {
	background: "#ffd7003d",
	minHeight: "calc(100vh - 5rem - 2rem)",
	padding: "1rem",
};

const Quiz = ({ quizData, handleClick, restart }) => {
	const { stats, quizQuestions } = quizData;

		const displayContent = (stats.finished && <FinishedComp stats={ stats } restart={ restart } />) ||
			(
				<React.Fragment>
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
				</React.Fragment>
			);

	return (
		<main className="Quiz" style={quizStyle}>
			{ displayContent }
		</main>
	);
};

export default Quiz;