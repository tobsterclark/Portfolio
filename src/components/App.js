import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useIntersection } from "./hooks/useIntersection";
import { animations } from "./animations";

export default function App() {
	const nav = useNavigate();
	const { state, pathname, hash, key } = useLocation();
	const homeRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();
	const projectsRef = useRef();
	const main = useRef();

	const aboutViewport = useIntersection(aboutRef, "-40px");
	const contactViewport = useIntersection(contactRef, "-40px");
	const projectsViewport = useIntersection(projectsRef, "-40px");
	const homeViewport = useIntersection(homeRef, "-40px");

	useEffect(() => {
		animations();

		var sent = "";
		if (aboutViewport && hash !== "#about") {
			nav("#about", { state: { sent: "auto" } });
		} else if (contactViewport && hash !== "#contact") {
			nav("#contact", { state: { sent: "auto" } });
		} else if (projectsViewport && hash !== "#projects") {
			nav("#projects", { state: { sent: "auto" } });
		} else if (homeViewport && hash !== "#home") {
			nav("#home", { state: { sent: "auto" } });
		}

		if (state) {
			sent = state.sent;
		}

		if (sent !== "auto") {
			console.log(main.current.scrollTop);
			if (hash === "" || hash === "#home") {
				main.current.scrollTo({ top: 0, behavior: "smooth", block: "start" });
			} else if (hash === "#about") {
				const y = aboutRef.current.getBoundingClientRect().top + main.current.scrollTop - 105;
				main.current.scrollTo({ top: y, behavior: "smooth", block: "start" });
			} else if (hash === "#contact") {
				const y = contactRef.current.getBoundingClientRect().top + main.current.scrollTop - 105;
				main.current.scrollTo({ top: y, behavior: "smooth", block: "start" });
			} else if (hash === "#projects") {
				const y = projectsRef.current.getBoundingClientRect().top + main.current.scrollTop - 105;
				main.current.scrollTo({ top: y, behavior: "smooth", block: "start" });
			}

			nav(hash, { state: { sent: "auto" } });
		}
	}, [pathname, hash, key, aboutViewport, projectsViewport, contactViewport, homeViewport, nav, state]);

	return (
		<div className="h-screen w-screen">
			<div className="z-20">
				<Header />
			</div>
			<div id="main" ref={main} className="z-10 w-full h-full overflow-x-hidden">
				<Home ref={homeRef} />
				<About ref={aboutRef} />
				<Projects ref={projectsRef} />
				<Contact ref={contactRef} />
			</div>
		</div>
	);
}
