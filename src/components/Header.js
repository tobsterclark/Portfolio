import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../images/profile.jpg";

export default function Header() {
	const [navbar, setNavBar] = useState("bg-transparent");
	const { hash } = useLocation();
	const [aboutStyles, setAboutStyles] = useState("border-transparent");
	const [projectsStyles, setProjectsStyles] = useState("border-transparent");
	const [contactStyles, setContactStyles] = useState("border-transparent");
	const [mobileStyles, setMobileStyles] = useState("hidden");
	const [hamburgerClicked, setHamburgerClicked] = useState("");
	const main = document.getElementById("main");
	const mainWindow = document.getElementById("mainWindow");

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
			main.classList.add("blur", "md:blur-none", "duration-1000");
		} else {
			setMobileStyles("hidden");
			setHamburgerClicked("");
			main.classList.remove("blur", "md:blur-none", "duration-1000");
		}
	};

	const changeHeader = () => {
		if (main.scrollTop >= 66) {
			setNavBar("bg-white dark:bg-slate-700 dark:text-gray-300 text-black shadow-2xl ");
		} else {
			setNavBar("bg-transparent dark:text-gray-300 text-white ");
		}
	};

	return (
		<div className="z-50">
			{/* Medium and larger header */}
			<div className={"z-50 top-0 left-0 right-0 fixed opacity-95 w-full h-fit hidden md:flex justify-between py-4 transition duration-300 items-center " + navbar}>
				{/* Logo */}
				<div className="w-1/2 sm:w-1/3 md:w-1/4 text-center px-10 flex gap-x-5 items-center justify-start">
					<img alt="profile" src={profile} className="opacity-100 w-4/5 md:w-1/3 sm:w-2/3 rounded-full" />
					<Link to="#home" state={{ sent: "btn" }} className="opacity-100 ">
						Toby Clark
					</Link>
				</div>
				<div className="px-10 justify-evenly flex h-full items-center">
					<button
						className="px-10"
						onClick={() => {
							const styles = [...mainWindow.classList];
							styles.indexOf("dark") !== -1 ? mainWindow.classList.remove("dark") : mainWindow.classList.add("dark");
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
					</button>
					<Link to="#about" state={{ sent: "btn" }} className={"opacity-100 flex-none pb-4 pt-6 px-10 border-b-2 " + aboutStyles}>
						About
					</Link>
					<Link to="#projects" state={{ sent: "btn" }} className={"opacity-100 flex-none pb-4 pt-6 px-10 border-b-2 " + projectsStyles}>
						Projects
					</Link>
					<Link to="#contact" state={{ sent: "btn" }} className={"opacity-100 flex-none pb-4 pt-6 px-10 border-b-2 " + contactStyles}>
						Contact
					</Link>
					<Link to="/resume" className="opacity-100 flex-none btn-primary shadow-xl mx-10 ">
						Resume
					</Link>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={"fixed -right-60 animate-sliderightin top-0 md:hidden flex z-50 flex-col text-center divide-y w-1/2 sm:w-1/3 h-screen bg-white " + mobileStyles}>
				<Link to="#home" state={{ sent: "btn" }} className="py-10" onClick={() => revealMobile()}>
					Home
				</Link>
				<Link to="#about" state={{ sent: "btn" }} className="py-10" onClick={() => revealMobile()}>
					About
				</Link>
				<Link to="#projects" state={{ sent: "btn" }} className="py-10" onClick={() => revealMobile()}>
					Projects
				</Link>
				<Link to="#contact" state={{ sent: "btn" }} className="py-10" onClick={() => revealMobile()}>
					Contact
				</Link>
			</div>

			{/* Mobile Hamburger Menu */}
			<button className="fixed md:hidden bottom-10 bg-blue-500 p-4 sm:p-4 gap-1 rounded-full z-50 right-10 flex flex-col items-center " onClick={() => revealMobile()}>
				<div className="h-0.5 sm:flex hidden" />
				<div className={"block bg-white w-4 duration-1000 h-0.5 sm:w-8 sm:h-1 rounded-2xl " + (hamburgerClicked ? "translate-y-1.5 sm:translate-y-2 -rotate-45" : "")} />
				<div className={"block bg-white w-4 duration-1000 h-0.5 sm:w-8 sm:h-1 rounded-2xl " + (hamburgerClicked ? "opacity-0" : "")} />
				<div className={"block bg-white w-4 duration-1000 h-0.5 sm:w-8 sm:h-1 rounded-2xl " + (hamburgerClicked ? "-translate-y-1.5 sm:-translate-y-2 rotate-45" : "")} />
				<div className="h-0.5 sm:flex hidden" />
			</button>
		</div>
	);
}
