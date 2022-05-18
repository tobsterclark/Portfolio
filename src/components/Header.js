import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../images/profile.png";

export default function Header() {
	const [navbar, setNavBar] = useState("bg-transparent");
	const { hash } = useLocation();
	const [aboutStyles, setAboutStyles] = useState("border-transparent");
	const [projectsStyles, setProjectsStyles] = useState("border-transparent");
	const [contactStyles, setContactStyles] = useState("border-transparent");
	const [mobileStyles, setMobileStyles] = useState("hidden");
	const [hamburgerClicked, setHamburgerClicked] = useState("");
	const main = document.getElementById("main");

	useEffect(() => {
		if (hash === "#about") {
			setAboutStyles("border-blue-500");
			setProjectsStyles("border-transparent");
			setContactStyles("border-transparent");
		} else if (hash === "#projects") {
			setProjectsStyles("border-blue-500");
			setAboutStyles("border-transparent");
			setContactStyles("border-transparent");
		} else if (hash === "#contact") {
			setProjectsStyles("border-transparent");
			setAboutStyles("border-transparent");
			setContactStyles("border-blue-500");
		} else {
			setProjectsStyles("border-transparent");
			setAboutStyles("border-transparent");
			setContactStyles("border-transparent");
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
			<div className={"top-0 left-0 right-0 fixed w-full h-fit hidden md:flex z-20 justify-between py-4 transition duration-300 items-center " + navbar}>
				{/* Logo */}
				<div className="w-1/2 sm:w-1/3 md:w-1/4 text-center px-10 flex gap-x-5 items-center justify-start">
					<img alt="profile" src={profile} className="w-4/5 md:w-1/3 sm:w-2/3 rounded-full" />
					<Link to="#home" state={{ sent: "btn" }} className="">
						Toby Clark
					</Link>
				</div>
				<div className="px-10 justify-evenly flex h-full items-center">
					<Link to="#about" state={{ sent: "btn" }} className={"flex-none pb-4 pt-6 px-10 border-b-2 " + aboutStyles}>
						About
					</Link>
					<Link to="#projects" state={{ sent: "btn" }} className={"flex-none pb-4 pt-6 px-10 border-b-2 " + projectsStyles}>
						Projects
					</Link>
					<Link to="#contact" state={{ sent: "btn" }} className={"flex-none pb-4 pt-6 px-10 border-b-2 " + contactStyles}>
						Contact
					</Link>
					<Link to="/resume" className="flex-none btn-primary mx-10 ">
						Resume
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
