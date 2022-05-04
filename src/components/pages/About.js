import React, { forwardRef } from "react";

const About = forwardRef(({ onBackClick }, ref) => {
	return (
		<div ref={ref} className="w-screen h-screen text-blue-500 flex items-center">
			<span className="w-full text-center">test</span>
		</div>
	);
});

export default About;
