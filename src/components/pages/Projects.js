import React, { forwardRef } from "react";
import Apollo from "../../images/Apollo.png";
// Need to make python code for Apollo update once a month - use Realtime DB

const Projects = forwardRef(({ onBackClick, main }, ref) => {
	return (
		<div ref={ref} className="flex text-black relative">
			<div className="flex w-full flex-col gap-y-48 items-center">
				<div className="relative flex w-full gap-x-5 items-center">
					<div className="flex flex-col w-full gap-y-5 z-20 py-10">
						<div className="text-left w-1/3 flex flex-col">
							<span className="font-masthead text-4xl ">Apollo</span>
							<span className="">Date: 4/22</span>
							<a target="_blank" href="https://apollo-9dd16.web.app/" rel="noreferrer">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>

						<span className="md:w-2/3 xl:w-1/2 bg-white rounded-lg shadow-2xl px-10 py-5">
							Web App for an example small boutique cinema. The project had a "stock management" system for all food options, and was fully dynamic from a Realtime Firebase DB.
						</span>

						<div className="md:w-2/3 lg:w-1/3 flex gap-1 flex-wrap">
							<span className="widget">React.JS</span>
							<span className="widget">Firebase Auth</span>
							<span className="widget">Firebase RT DB</span>
							<span className="widget">TailwindCSS</span>
							<span className="widget">React-DOM</span>
							<span className="widget">React-Hot-Toast</span>
							<span className="widget">tsparticles</span>
						</div>
					</div>
					<img src={Apollo} className="xl:w-2/3 md:w-5/6 rounded-lg absolute z-10 top-0 bottom-0 right-0 my-auto" alt="The Apollo website" />
				</div>

				<div className="relative flex w-full gap-x-5 items-center">
					<img src={Apollo} className="xl:w-2/3 md:w-5/6 rounded-lg absolute z-10 top-0 bottom-0 left-0 my-auto" alt="The Apollo website" />

					<div className="flex flex-col w-full gap-y-5 z-20 items-end">
						<div className="text-right items-end w-1/3 flex flex-col py-10">
							<span className="font-masthead text-4xl ">Apollo</span>
							<span className="">Date: 4/22</span>
							<a target="_blank" href="https://apollo-9dd16.web.app/" rel="noreferrer">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={1}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						</div>

						<span className="md:w-2/3 xl:w-1/2 bg-white rounded-lg shadow-2xl px-10 py-5">
							Web App for an example small boutique cinema. The project had a "stock management" system for all food options, and was fully dynamic from a Realtime Firebase DB.
						</span>

						<div className="md:w-2/3 lg:w-1/3 flex gap-1 flex-wrap">
							<span className="widget">React.JS</span>
							<span className="widget">Firebase Auth</span>
							<span className="widget">Firebase RT DB</span>
							<span className="widget">TailwindCSS</span>
							<span className="widget">React-DOM</span>
							<span className="widget">React-Hot-Toast</span>
							<span className="widget">tsparticles</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Projects;
