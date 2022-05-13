import React, { forwardRef } from "react";
import picture from "../../images/IMG_5163.jpg";

const About = forwardRef(({ onBackClick }, ref) => {
	return (
		<div ref={ref} className="w-screen flex flex-col justify-between items-center">
			<div className="flex justify-between w-full items-center p-10">
				<div className="flex flex-col w-1/2 text-center js-slideLeft">
					<span className="font-masthead py-5 text-4xl">About Me</span>
					<span className="">
						I am a person
						<span></span>
					</span>
				</div>
				<img className="w-1/3 hidden items-center md:flex shadow-2xl rounded-full js-slideLeft" alt="This is a photograph" src={picture} />
			</div>
			<div className="items-center flex flex-col pb-10 js-fadeIn">
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
