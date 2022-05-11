import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useIntersection } from "./hooks/useIntersection";

export default function App() {
	const nav = useNavigate();
	const { state, pathname, hash, key } = useLocation();
	const homeRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();
	const projectsRef = useRef();
	const main = useRef();

	const aboutViewport = useIntersection(aboutRef, "-100px");
	const contactViewport = useIntersection(contactRef, "-100px");
	const projectsViewport = useIntersection(projectsRef, "-100px");
	const homeViewport = useIntersection(homeRef, "-100px");

	useEffect(() => {
		var sent = "";
		if (aboutViewport && hash !== "#about" && !projectsViewport && !homeViewport) {
			nav("#about", { state: { sent: "auto" } });
		} else if (contactViewport && hash !== "#contact" && !projectsViewport) {
			nav("#contact", { state: { sent: "auto" } });
		} else if (projectsViewport && hash !== "#projects" && !aboutViewport && !contactViewport) {
			nav("#projects", { state: { sent: "auto" } });
		} else if (homeViewport && hash !== "#home" && !aboutViewport) {
			nav("#home", { state: { sent: "auto" } });
		}

		if (state) {
			sent = state.sent;
		}

		if (sent !== "auto") {
			// need to change it so button only happens once

			// if not a hash link, scroll to top
			if (hash === "") {
				window.scrollTo({ top: 0, behavior: "smooth", block: "start" });
			}
			// else scroll to id
			else {
				setTimeout(() => {
					const id = hash.replace("#", "");
					if (id === "home") {
						homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
					} else if (id === "about") {
						aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
					} else if (id === "contact") {
						contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
					} else if (id === "projects") {
						projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
					}
				}, 0);
			}
		}
	}, [pathname, hash, key, aboutViewport, projectsViewport, contactViewport, homeViewport, nav, state]);

	return (
		<div className="h-screen w-screen">
			<div className="z-10">
				<Header />
			</div>
			<div id="main" ref={main} className="z-5 w-full h-full overflow-x-hidden">
				<Home ref={homeRef} />
				<About ref={aboutRef} />
				<Projects ref={projectsRef} />
				<Contact ref={contactRef} />
			</div>
		</div>
	);
}
