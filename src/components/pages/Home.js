import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import backgroundImage from "../../images/backgroundImage.jpg";

const Home = forwardRef(({ onBackClick }, ref) => {
	const typeWriterContent = ["REACT", "PYTHON", "SWIFT", "JAVASCRIPT", "FIREBASE", "PHOTOGRAPHY"];

	return (
		<div ref={ref} className="md:h-screen h-2/3 w-full text-white flex bg-white items-center justify-center overflow-hidden bg-cover bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="flex flex-col gap-y-10 items-center font-masthead w-5/6 sm:w-4/5 md:w-2/5 text-center bg-opacity-30">
				<div className="py-5 sm:px-10 px-2 flex flex-col gap-y-3 w-full">
					<div className="md:text-6xl sm:text-4xl h-24 text-center items-center justify-center hidden sm:flex w-full">
						<Typewriter
							options={{
								strings: typeWriterContent,
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
					<span className="text-2xl sm:text-lg font-sans font-light">Hi, I'm Toby, a fullstack developer</span>
				</div>
				<Link to="#about" state={{ sent: "btn" }} className="py-5 btn-primary w-3/5 sm:w-1/3 font-sans font-light">
					About me
				</Link>
			</div>
			<div className="absolute left-3 bottom-3 w-6 h-6">
				<svg xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<span className="opacity-0 focus:opacity-100 hover:opacity-100 duration-300 absolute inset-0 z-10 text-right whitespace-nowrap text-white">
					<span className="absolute left-10">Taken by Toby Clark</span>
				</span>
			</div>
		</div>
	);
});

export default Home;
