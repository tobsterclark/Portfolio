import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import backgroundImage from "../../images/backgroundImage.jpg";

const Home = forwardRef(({ onBackClick }, ref) => {
	const typeWriterContent = ["FULLSTACK DEVELOPMENT", "REACT", "PYTHON", "SWIFT", "JAVASCRIPT"];

	return (
		<div ref={ref} className="w-screen h-screen text-white flex bg-white items-center justify-center overflow-hidden bg-cover bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="flex flex-col gap-y-10 items-center font-masthead w-2/5 text-center bg-opacity-30">
				<div className="py-5 px-10 flex flex-col gap-y-3 w-full">
					<div className="text-6xl h-24 text-center items-center justify-center flex gap-x-3 w-full">
						<Typewriter
							options={{
								strings: typeWriterContent,
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
					<span className="">Hi, I'm Toby, a fullstack developer</span>
				</div>
				<Link to="#about" className="py-5 btn-primary w-1/3 font-sans font-light">
					About me
				</Link>
			</div>
		</div>
	);
});

export default Home;
