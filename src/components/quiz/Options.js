import React from "react";
import Option from "./Option";

const options = [
	{ text: "Nulla est proident eu quis.", correct: true },
	{ text: "Officia aliquip laborum.", correct: false },
	{ text: "Lorem ipsum non consectetur laborum.", correct: false },
];

const Options = () => {
	return (
		<section className="Options">
			{options.map((opt, index) => (
				<Option option={opt} key={index} />
			))}
		</section>
	);
};

export default Options;