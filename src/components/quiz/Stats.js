import React from "react";

const Stats = ({ questionNo, totalQuestions, score, highScore }) => {
	return (
		<section className="Stats">
			<div
				style={{
					textAlign: "left",
					margin: "1rem 0",
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