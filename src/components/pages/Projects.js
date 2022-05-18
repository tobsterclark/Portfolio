import React, { forwardRef } from "react";
import Apollo from "../../images/Apollo.png";
// Need to make python code for Apollo update once a month - use Realtime DB

const Projects = forwardRef(({ onBackClick }, ref) => {
	const allProjects = {
		Apollo: {
			date: "4/22",
			content: 'Web App for an example small boutique cinema. The project had a "stock management" system for all food options, and was fully dynamic from a Realtime Firebase DB.',
			widgets: ["React.JS", "Firebase Auth", "Firebase RT DB", "TailwindCSS", "React-DOM", "React-Hot-Toast", "tsparticles"],
			link: "https://apollo-9dd16.web.app/",
			img: Apollo,
		},
		test: {
			date: "4/20",
			content: "This is the text of an example project!",
			widgets: ["React.JS", "TailwindCSS"],
			link: "https://example.com",
			img: Apollo,
		},
	};

	const showProjects = () => {
		const output = [];
		var iter = 0;

		for (let i in allProjects) {
			var left = true;
			iter % 2 === 0 ? (left = true) : (left = false);
			const project = allProjects[i];
			const widgets = project.widgets.map((widget) => {
				return (
					<span key={widget} className="widget">
						{widget}
					</span>
				);
			});

			output.push(
				<div key={i} className="relative flex w-full gap-x-5 items-center">
					<div className={"flex flex-col w-full gap-y-5 z-20 py-10 " + (left ? "" : "items-end")}>
						<div className={"w-1/3 flex flex-col " + (left ? "text-left" : "items-end text-right")}>
							<span className="font-masthead text-4xl ">{i}</span>
							<span className="">Date: {project.date}</span>
							<a target="_blank" href={project.link} rel="noreferrer">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>
						<span className="md:w-2/3 xl:w-1/2 bg-white rounded-lg shadow-2xl px-10 py-5">{project.content}</span>
						<div className="md:w-2/3 lg:w-1/3 flex gap-1 flex-wrap px-5"> {widgets}</div>
					</div>
					<img src={project.img} className={"xl:w-2/3 md:w-5/6 rounded-lg absolute z-10 top-0 bottom-0 my-auto " + (left ? "right-0" : "left-0")} alt="The Apollo website" />
				</div>
			);

			iter++;
		}

		return output;
	};

	return (
		<div ref={ref} className="flex text-black relative">
			<div className="flex w-full flex-col gap-y-48 items-center">{showProjects()}</div>
		</div>
	);
});

export default Projects;
