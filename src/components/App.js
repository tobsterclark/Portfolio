import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

export default function App() {
	const { pathname, hash, key } = useLocation();
	const homeRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();
	const projectsRef = useRef();

	useEffect(() => {
		// if not a hash link, scroll to top
		if (hash === "") {
			window.scrollTo(0, 0);
		}
		// else scroll to id
		else {
			setTimeout(() => {
				const id = hash.replace("#", "");
				if (id === "home") {
					homeRef.current.scrollIntoView({ behavior: "smooth" });
				} else if (id === "about") {
					aboutRef.current.scrollIntoView({ behavior: "smooth" });
				} else if (id === "contact") {
					contactRef.current.scrollIntoView({ behavior: "smooth" });
				} else if (id === "projects") {
					projectsRef.current.scrollIntoView({ behavior: "smooth" });
				}
			}, 0);
		}
	}, [pathname, hash, key]);

	return (
		<div className="">
			<div className="top-0 left-0 right-0 fixed z-10">
				<Header />
			</div>
			<div className="z-5 overflow-x-hidden">
				<Home ref={homeRef} />
				<About ref={aboutRef} />
				<Projects ref={projectsRef} />
				<Contact ref={contactRef} />
			</div>
		</div>
	);
}
