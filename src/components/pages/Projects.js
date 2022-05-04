import React, { forwardRef } from "react";

const Projects = forwardRef(({ onBackClick }, ref) => {
	return (
		<div ref={ref} className="w-screen h-screen text-white flex bg-gray-500 items-center">
			<span className="w-full text-center">test</span>
		</div>
	);
});

export default Projects;
