import React from "react";
import Option from "./Option";

const Options = ({ options }) => {
	return (
		<section className="Options">
			{options.map((opt, index) => (
				<Option option={opt} key={index} />
			))}
		</section>
	);
};

export default Options;