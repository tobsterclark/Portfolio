import React, { forwardRef } from "react";
import SCNR from "../../images/SCNR.jpg";
import Apollo from "../../images/Apollo.jpg";
import wordle from "../../images/wordle.jpg";
import Taskable from "../../images/Taskable.jpg";
import pomodoro from "../../images/pomodoro.jpg";
// Need to make python code for Apollo update once a month - use Functions

const Projects = forwardRef(({ onBackClick }, ref) => {
	const allProjects = {
		Apollo: {
			date: "4/22",
			content: "A web application for a made-up small boutique cinema. Including a stock management system and booking system, this project worked to dynamically store and retrieve data from a Real-time Firebase Database.",
			widgets: ["React.JS", "Firebase Auth", "Firebase RT DB", "TailwindCSS", "React-DOM", "React-Hot-Toast", "tsparticles"],
			link: "https://apollo.tobyclark.dev",
			img: Apollo,
		},
		SCNR: {
			date: "6/22",
			content: "A web application for a small business on the sunshine coast. This website was designed in webflow and hosted on Firebase, it utilised Firebase Functions for the backend code.",
			widgets: ["Webflow", "Firebase Functions"],
			link: "https://sunshine-coast-neuro-rehab.web.app",
			img: SCNR,
		},
		Wordle: {
			date: "6/22",
			content: "A web application for wordle clone designed in React with Typescript.",
			widgets: ["React.JS", "Typescript", "Firebase Functions", "TailwindCSS"],
			link: "https://wordle.tobyclark.dev",
			img: wordle,
			github: "https://github.com/tobsterclark/wordle-clone-dev",
		},
		Pomodoro: {
			date: "10/21",
			content: "A pomodoro based timer web application designed in React with Typescript.",
			widgets: ["React.JS", "Typescript", "Github Pages", "TailwindCSS"],
			link: "https://tobsterclark.github.io/pomodoro",
			img: pomodoro,
			github: "https://github.com/tobsterclark/pomodoro",
		},
		Taskable: {
			date: "10/19",
			content: "An IOS application designed for managing homework and assessments. The application was designed in Adobe XD and created in Xcode and Swift, it utilised Firebase Realtime Database to dynamically store data.",
			widgets: ["Swift", "Xcode", "Firebase RT DB"],
			img: Taskable,
		},
	};

	const showProjects = () => {
		const output = [];
		var iter = 0;

		for (let i in allProjects) {
			var left;
			iter % 2 === 0 ? (left = true) : (left = false);
			const project = allProjects[i];
			const widgets = project.widgets.map((widget) => {
				return (
					<span key={widget} className="widget bg-blue-300">
						{widget}
					</span>
				);
			});

			output.push(
				<div key={i} className="relative flex w-full items-center js-fadeIn">
					<div className={"flex flex-col w-full gap-y-1 sm:gap-y-5 z-20 py-10 " + (left ? "js-slideLeft" : "items-end js-slideRight")}>
						<div className={"w-1/3 flex flex-col " + (left ? "text-left" : "items-end text-right")}>
							<h1 className="header1">{i}</h1>
							<div className={"flex md:flex-col gap-x-5 items-center " + (left ? "text-left md:items-start" : "md:items-end text-right flex-row-reverse")}>
								<span className="py-1">Date: {project.date}</span>
								<div className="flex gap-x-1">
									<a target="_blank" href={project.link} rel="noreferrer" alt={i} className={project.link ? "" : "hidden"}>
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:stroke-blue-500 stroke-black dark:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={1}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
									<a target="_blank" href={project.github} rel="noreferrer" alt={i} className={project.github ? "" : "hidden"}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 hover:stroke-blue-500 stroke-black dark:stroke-white">
											<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="md:hidden relative w-full rounded-lg bg-contain bg-blend-overlay bg-black bg-opacity-70" style={{ backgroundImage: `url(${project.img})` }}>
							<img src={project.img} className="w-full invisible" alt={"An example of " + i} />
							<div className="w-full flex md:contents absolute md:relative top-0 bottom-0 my-auto items-center">
								<span className="h-fit md:w-2/3 xl:w-1/2 text-white dark:md:text-white md:text-black md:bg-white dark:md:bg-slate-700 rounded-lg md:shadow-2xl px-5 py-5">{project.content}</span>
							</div>
						</div>

						<div className="w-full hidden md:contents absolute md:relative top-0 bottom-0 my-auto items-center">
							<span className="h-fit md:w-2/3 xl:w-1/2 text-white dark:md:text-white md:text-black md:bg-white dark:md:bg-slate-700 rounded-lg md:shadow-2xl px-5 py-5">{project.content}</span>
						</div>

						<div className={"md:w-2/3 lg:w-1/3 flex gap-1 flex-wrap text-black " + (left ? "pr-1" : "justify-end pl-1")}> {widgets}</div>
					</div>
					<img src={project.img} className={"xl:w-2/3 md:w-5/6 hidden md:flex rounded-lg absolute z-10 top-0 bottom-0 my-auto " + (left ? "right-0" : "left-0")} alt={"An example of " + i} />
				</div>
			);

			iter++;
		}

		return output;
	};

	return (
		<div ref={ref} className="flex relative px-5">
			<div className="flex w-full flex-col md:gap-y-48 items-center">{showProjects()}</div>
		</div>
	);
});

export default Projects;
