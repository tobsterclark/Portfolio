import React, { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Typewriter from "typewriter-effect";
import Typewriter from "../typewriter";
import { useLocation } from "react-router-dom";
import backgroundImage1 from "../../images/backgroundImageLight.jpg";
import backgroundImage2 from "../../images/backgroundImageDark.jpg";

const Home = forwardRef(({ onBackClick }, ref) => {
	const { hash } = useLocation();
	const [rerender, setRerender] = useState(false);
	const typeWriterContent = ["REACT", "PYTHON", "SWIFT", "JAVASCRIPT", "FIREBASE", "PHOTOGRAPHY"];

	//Trying to figure out why mobile doesnt show image after scrolling
	useEffect(() => {
		rerender ? setRerender(true) : setRerender(false);
	}, [hash, rerender]);

	return (
		<div ref={ref} className="md:h-screen h-2/3 w-full relative flex items-center justify-center overflow-hidden">
			<img src={backgroundImage1} alt="background" className="dark:hidden h-full w-full object-cover -z-10" />
			<img src={backgroundImage2} alt="background" className="hidden dark:flex h-full w-full object-cover -z-10" />
			<div className="absolute z-10 flex flex-col gap-y-10 items-center font-masthead w-5/6 sm:w-4/5 md:w-2/5 text-center bg-opacity-30">
				<div className="py-5 sm:px-10 px-2 flex flex-col gap-y-3 w-full">
					<div className="md:text-6xl text-white sm:text-4xl h-24 text-center items-center justify-center hidden sm:flex w-full">
						<Typewriter
							options={{
								strings: typeWriterContent,
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
					<span className="text-2xl text-white dark:text-gray-300 sm:text-lg font-sans font-light">Hi, I'm Toby, a fullstack developer</span>
				</div>
				<Link to="#about" state={{ sent: "btn" }} className="py-5 btn-primary w-3/5 sm:w-1/3 font-sans font-light">
					About me
				</Link>
			</div>
			<div className="absolute left-3 bottom-3 w-6 h-6">
				<svg xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 z-10 stroke-white dark:stroke-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
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
