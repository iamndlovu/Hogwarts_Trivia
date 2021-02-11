import React from "react";

const Stats = ({ stats }) => {

	let { questionNo, totalQuestions, score, highScore } = stats;

	return (
		<section className="Stats" style={{
			height: "5rem",
			borderBottom: "1px solid #555"
		}}>
			<div
				style={{
					textAlign: "left",
					marginBottom: "1rem",
				}}
			>
				<span style={{ fontWeight: "500" }}>Question</span> {"   "} {questionNo}{" "}
				{"   "}
				<span style={{ fontWeight: "500" }}>of</span> {totalQuestions}
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div>
					<span style={{ fontWeight: "500" }}>Score</span>: {score}
				</div>
				<div>
					<span style={{ fontWeight: "500" }}>High score</span>: {highScore}
				</div>
			</div>
		</section>
	);
};

export default Stats;