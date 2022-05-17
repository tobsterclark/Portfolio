/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useState, useEffect } from "react";
import picture from "../../images/IMG_5163.jpg";

const About = forwardRef(({ onBackClick }, ref) => {
	const [currentEducation, setCurrentEducation] = useState("diploma");
	const [currentHighlight, setCurrentHighlight] = useState({ school: false, cert: false, diploma: false, bachelor: false });

	useEffect(() => {
		var output = {};
		for (let i in currentHighlight) {
			currentEducation === i ? (output[i] = true) : (output[i] = false);
		}

		setCurrentHighlight(output);
	}, [currentEducation]);

	const currentText = () => {
		if (currentEducation === "school") {
			return <div>NBCS, Knox</div>;
		} else if (currentEducation === "cert") {
			return <div>TAFE, completion:xx-xx-xxxx</div>;
		} else if (currentEducation === "diploma") {
			return <div>In progress, TAFE Hornsby</div>;
		} else if (currentEducation === "bachelor") {
			return <div>UTS or UNSW</div>;
		}
	};

	return (
		<div ref={ref} className="w-full flex flex-col justify-between items-center">
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
			<div className="items-center flex flex-col pb-10 js-fadeIn w-full">
				<span className="text-4xl font-masthead py-5">Education</span>
				<div className="w-2/3 flex gap-10">
					<div className="items-start flex flex-col gap-y-5 w-1/3">
						<button
							onClick={() => {
								setCurrentEducation("school");
							}}
							className={"px-2 text-left border-l-2 duration-150 w-full " + (currentHighlight.school ? "border-blue-500" : "border-transparent rounded-lg bg-opacity-50 hover:bg-blue-300")}
						>
							Year 11 Highschool
						</button>
						<button
							onClick={() => {
								setCurrentEducation("cert");
							}}
							className={"px-2 text-left border-l-2 duration-150 w-full " + (currentHighlight.cert ? "border-blue-500" : "border-transparent rounded-lg bg-opacity-50 hover:bg-blue-300")}
						>
							Cert IV Information Technology
						</button>
						<button
							onClick={() => {
								setCurrentEducation("diploma");
							}}
							className={"px-2 text-left border-l-2 duration-150 w-full " + (currentHighlight.diploma ? "border-blue-500" : "border-transparent rounded-lg bg-opacity-50 hover:bg-blue-300")}
						>
							Current - Diploma Information Technology
						</button>
						<button
							onClick={() => {
								setCurrentEducation("bachelor");
							}}
							className={"px-2 text-left border-l-2 duration-150 w-full " + (currentHighlight.bachelor ? "border-blue-500" : "border-transparent rounded-lg bg-opacity-50 hover:bg-blue-300")}
						>
							Future - Bachelors in Computer Science
						</button>
					</div>
					<div className="w-2/3">{currentText()}</div>
				</div>
			</div>
		</div>
	);
});

export default About;
