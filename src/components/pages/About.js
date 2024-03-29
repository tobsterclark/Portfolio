/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useState, useEffect } from "react";
import picture from "../../images/profile.jpg";

const About = forwardRef(({ onBackClick }, ref) => {
	const [currentEducation, setCurrentEducation] = useState("hackerrank");
	const [currentHighlight, setCurrentHighlight] = useState({ school: false, cert: false, diploma: false, bachelor: false, hackerrank: false });

	useEffect(() => {
		var output = {};
		for (let i in currentHighlight) {
			currentEducation === i ? (output[i] = true) : (output[i] = false);
		}

		setCurrentHighlight(output);
	}, [currentEducation]);

	const currentText = () => {
		if (currentEducation === "school") {
			return (
				<div className="w-full flex flex-col gap-y-5 justify-end">
					<div className="flex flex-col">
						<span className="text-2xl font-masthead">
							School <span className="font-sans">@KNOX, @NBCS</span>
						</span>
						<span className="text-xl">2013-2022</span>
					</div>
					<ul className="px-5 list-disc w-full">
						<li className="px-2">ADF Future Innovators Award - AAC & Knox, 2022</li>
						<li className="px-2">Senior Sergeant in Cadets - Knox, 2022</li>
						<li className="px-2">Completed Year 11 - Knox, 2021</li>
						<li className="px-2">Leader of Production & Media Team - NBCS, 2019</li>
						<li className="px-2">STEM Leader - NBCS 2019</li>
						<li className="px-2">Community Award x 3 - NBCS 2015-2019</li>
					</ul>
				</div>
			);
		} else if (currentEducation === "hackerrank") {
			return (
				<div className="w-full flex flex-col gap-y-5 justify-end">
					<div className="flex flex-col">
						<span className="text-2xl font-masthead">Hacker Rank</span>
						<span className="text-xl">2022</span>
					</div>
					<ul className="px-5 list-disc w-full">
						<li className="px-2">
							<a target="_blank" rel="noreferrer" className="text-blue-500 underline" href="https://www.hackerrank.com/certificates/ec71049fd3a1">
								Certificate for Javascript (intermediate)
							</a>
						</li>
						<li className="px-2">
							<a target="_blank" rel="noreferrer" className="text-blue-500 underline" href="https://www.hackerrank.com/certificates/eca3b2fc92d6">
								Certificate for Javascript (Basic)
							</a>
						</li>
						<li className="px-2">
							<a target="_blank" rel="noreferrer" className="text-blue-500 underline" href="https://www.hackerrank.com/certificates/0c5764276ba3">
								Certificate for React
							</a>
						</li>
						<li className="px-2">
							<a target="_blank" rel="noreferrer" className="text-blue-500 underline" href="https://www.hackerrank.com/certificates/d30766711188">
								Certificate for Python
							</a>
						</li>
					</ul>
				</div>
			);
		}
	};

	return (
		<div ref={ref} className="w-full flex flex-col justify-between items-center">
			<div className="flex justify-between w-full items-center p-10">
				<div className="flex flex-col w-full md:w-1/2 text-center js-slideLeft">
					<h1 className="header1">About Me</h1>
					<span className="">
						I am a fullstack software developer with a focus on React.JS, python, and swift. I love photography, production, and everything to do with technology. When I'm not at my desk I play basketball, go mountain biking, and love hiking.
					</span>
				</div>
				<img className="w-1/3 hidden items-center md:flex shadow-2xl rounded-full js-slideLeft" alt="This is a photograph" src={picture} />
			</div>
			<div className="items-center flex flex-col pb-10 js-fadeIn w-full">
				<h1 className="header1">Education</h1>
				<div className="w-full lg:w-2/3 flex md:flex-row flex-col gap-10 shadow-2xl dark:bg-slate-700 rounded-lg p-2 sm:p-10">
					<div className="w-full items-start flex-wrap sm:flex-nowrap overflow-hidden py-5 justify-start sm:justify-center flex md:flex-col gap-y-5 md:w-1/3">
						<button
							onClick={() => {
								setCurrentEducation("school");
							}}
							className={
								"p-2 w-full text-left border-b-2 md:border-b-0 md:border-l-2 duration-150 " +
								(currentHighlight.school ? "border-blue-500" : "border-slate-300 border-2 sm:border-transparent rounded-lg bg-opacity-50 hover:bg-blue-300 hover:text-black")
							}
						>
							Year 11 Highschool
						</button>
						<button
							onClick={() => {
								setCurrentEducation("hackerrank");
							}}
							className={
								"p-2 w-full text-left border-b-2 md:border-b-0 md:border-l-2 duration-150 " +
								(currentHighlight.hackerrank ? "border-blue-500" : "border-slate-300 border-2 sm:border-transparent rounded-lg bg-opacity-50 hover:bg-blue-300 hover:text-black")
							}
						>
							Hacker Rank
						</button>
					</div>
					<div className="md:w-2/3 px-5">{currentText()}</div>
				</div>
			</div>
		</div>
	);
});

export default About;
