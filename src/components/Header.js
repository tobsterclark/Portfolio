import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	const [navbar, setNavBar] = useState("bg-transparent");

	useEffect(() => {
		changeHeader();
		window.addEventListener("scroll", changeHeader);

		return function cleanup() {
			window.removeEventListener("scroll", changeHeader);
		};
	}, []);

	const changeHeader = () => {
		if (window.scrollY >= 66) {
			setNavBar("bg-white text-black shadow-lg");
		} else {
			setNavBar("bg-transparent text-white");
		}
	};

	return (
		<div className={"w-full flex justify-between py-8 transition duration-300 " + navbar}>
			<div className="w-1/3 text-center px-10">
				<Link to="#home">Toby Clark</Link>
			</div>
			<div className="w-1/3 flex px-10 justify-evenly">
				<Link to="#about">About</Link>
				<Link to="#projects">Projects</Link>
				<Link to="#contact">Contact</Link>
			</div>
		</div>
	);
}
