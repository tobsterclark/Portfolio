import React, { forwardRef } from "react";

const About = forwardRef(({ onBackClick }, ref) => {
	return (
		<div ref={ref} className="w-screen h-screen flex flex-col justify-between items-center">
			<div className="flex  justify-around w-full items-center divide-x-2">
				<div className="flex flex-col py-10 w-1/2 text-center">
					<span className="font-masthead py-5 text-4xl">About Me</span>
					<span className="">
						I am a person
						<span></span>
					</span>
				</div>
				<div className="w-1/2 text-center hidden items-center md:flex ">This is a photograph</div>
			</div>
			<div className="items-center flex flex-col py-10">
				<span className="text-4xl font-masthead py-5">Education</span>
				<span>NBCS</span>
				<span>Knox</span>
				<span>TAFE</span>
				<span className="text-4xl font-masthead py-5">Future</span>
				<span>Bachelor</span>
			</div>
		</div>
	);
});

export default About;
