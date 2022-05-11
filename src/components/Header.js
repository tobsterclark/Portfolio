import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../images/profile.png";

export default function Header() {
	const [navbar, setNavBar] = useState("bg-transparent");
	const { hash } = useLocation();
	const [aboutStyles, setAboutStyles] = useState("");
	const [projectsStyles, setProjectsStyles] = useState("");
	const [contactStyles, setContactStyles] = useState("");
	const [mobileStyles, setMobileStyles] = useState("hidden");
	const [hamburgerClicked, setHamburgerClicked] = useState("");
	const main = document.getElementById("main");

	useEffect(() => {
		if (hash === "#about") {
			setAboutStyles("border-b-2 border-blue-500");
			setProjectsStyles("");
			setContactStyles("");
		} else if (hash === "#projects") {
			setProjectsStyles("border-b-2 border-blue-500");
			setAboutStyles("");
			setContactStyles("");
		} else if (hash === "#contact") {
			setProjectsStyles("");
			setAboutStyles("");
			setContactStyles("border-b-2 border-blue-500");
		} else {
			setProjectsStyles("");
			setAboutStyles("");
			setContactStyles("");
		}

		if (main) {
			changeHeader();
			main.addEventListener("scroll", changeHeader);
		}

		return function cleanup() {
			if (main) {
				main.removeEventListener("scroll", changeHeader);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hash, main]);

	const revealMobile = () => {
		if (mobileStyles === "hidden") {
			setMobileStyles("flex");
			setHamburgerClicked("animate-together");
		} else {
			setMobileStyles("hidden");
			setHamburgerClicked("");
		}
	};

	const changeHeader = () => {
		if (main.scrollTop >= 66) {
			setNavBar("bg-white text-black shadow-lg ");
		} else {
			setNavBar("bg-transparent text-white ");
		}
	};

	return (
		<div>
			<div className={"top-0 left-0 right-0 fixed w-full hidden md:flex  justify-between py-4 transition duration-300 items-center " + navbar}>
				{/* Logo */}
				<div className="w-1/2 sm:w-1/3 md:w-1/4 text-center px-10 flex items-center justify-start">
					<img alt="profile" src={profile} className="w-4/5 md:w-1/3 sm:w-2/3 rounded-full" />
					<Link to="#home" state={{ sent: "btn" }} className="">
						Toby Clark
					</Link>
				</div>
				<div className="w-1/4 px-10 justify-evenly flex">
					<Link to="#about" state={{ sent: "btn" }} className={"pb-2 px-3 " + aboutStyles}>
						About
					</Link>
					<Link to="#projects" state={{ sent: "btn" }} className={"pb-2 px-3 " + projectsStyles}>
						Projects
					</Link>
					<Link to="#contact" state={{ sent: "btn" }} className={"pb-2 px-3 " + contactStyles}>
						Contact
					</Link>
				</div>
			</div>

			<div className={"fixed -right-60 animate-sliderightin top-0 md:hidden flex flex-col text-center divide-y w-1/2 sm:w-1/3 h-screen bg-white " + mobileStyles}>
				<Link to="#home" state={{ sent: "btn" }} className="py-10">
					Home
				</Link>
				<Link to="#about" state={{ sent: "btn" }} className="py-10">
					About
				</Link>
				<Link to="#projects" state={{ sent: "btn" }} className="py-10">
					Projects
				</Link>
				<Link to="#contact" state={{ sent: "btn" }} className="py-10">
					Contact
				</Link>
			</div>

			<button className="fixed md:hidden bottom-10 bg-blue-500 p-2 sm:p-4 gap-1 rounded-full right-10 flex flex-col items-center " onClick={() => revealMobile()}>
				<div className="h-0.5 sm:flex hidden" />
				<div className={"block bg-white w-4 h-0.5 sm:w-8 sm:h-1 rounded-2xl " + hamburgerClicked} />
				<div className={"block bg-white w-4 h-0.5 sm:w-8 sm:h-1 rounded-2xl " + hamburgerClicked} />
				<div className={"block bg-white w-4 h-0.5 sm:w-8 sm:h-1 rounded-2xl " + hamburgerClicked} />
				<div className="h-0.5 sm:flex hidden" />
			</button>
		</div>
	);
}
