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
		</div>
	);
});

export default Home;
