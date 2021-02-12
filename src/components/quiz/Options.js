import React from "react";
import Option from "./Option";

const Options = ({ options, handleClick }) => {
	return (
		<section className="Options">
			{options.map((opt, index) => (
				<Option option={opt} handleClick={handleClick} key={index} />
			))}
		</section>
	);
};

export default Options;