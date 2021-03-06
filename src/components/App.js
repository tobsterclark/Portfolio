import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useIntersection } from "./hooks/useIntersection";
import { animations } from "./animations";
import toast, { ToastBar, Toaster } from "react-hot-toast";

export default function App() {
	const nav = useNavigate();
	const { state, pathname, hash, key } = useLocation();
	const homeRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();
	const projectsRef = useRef();
	const main = useRef();

	const aboutViewport = useIntersection(aboutRef, "-40px", 0.2);
	const contactViewport = useIntersection(contactRef, "-40px", 0.6);
	const projectsViewport = useIntersection(projectsRef, "-40px", 0.2);
	const homeViewport = useIntersection(homeRef, "-40px", 0.6);

	useEffect(() => {
		animations();

		//Checking initial light or dark mode
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			main.current.classList.add("dark");
		} else {
			main.current.classList.add("light");
		}

		const mainIncludes = (matches) => {
			for (let i in main.current.classList) {
				if (i === (matches ? "dark" : "light")) {
					return true;
				}
			}
			return false;
		};

		//Adding a listener for if system lightmode changes
		const lightMode = (matches) => {
			if (!mainIncludes(matches)) {
				main.current.classList.add(matches ? "dark" : "light");
				main.current.classList.remove(matches ? "light" : "dark");
			}
		};

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
			lightMode(event.matches);
		});

		return function cleanup() {
			window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
				lightMode(event.matches);
			});
		};
	}, []);

	useEffect(() => {
		var sent = "";
		if (aboutViewport && hash !== "#about" && !homeViewport) {
			nav("#about", { state: { sent: "auto" } });
		} else if (contactViewport && hash !== "#contact") {
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
			if (hash === "" || hash === "#home") {
				window.scrollTo({ top: 0, behavior: "smooth", block: "start" });
			} else if (hash === "#about") {
				const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset - 105;
				window.scrollTo({ top: y, behavior: "smooth", block: "start" });
			} else if (hash === "#contact") {
				const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset - 105;
				window.scrollTo({ top: y, behavior: "smooth", block: "start" });
			} else if (hash === "#projects") {
				const y = projectsRef.current.getBoundingClientRect().top + window.pageYOffset - 105;
				window.scrollTo({ top: y, behavior: "smooth", block: "start" });
			}

			nav(hash, { state: { sent: "auto" } });
		}
	}, [pathname, hash, key, aboutViewport, projectsViewport, contactViewport, homeViewport, nav, state]);

	return (
		<div id="main" ref={main} className="h-full overflow-hidden no-scrollbar">
			<div className="z-50">
				<Header main={main} />
			</div>
			<div id="body" className="z-10 w-full h-full overflow-y-hidden overflow-x-hidden relative items-center bg-white">
				<div className="dark:text-gray-300 text-black">
					<Home ref={homeRef} className="w-full" />
					<div className="w-screen bg-white dark:bg-slate-900 z-10 text-sm md:text-base justify-center flex">
						<div className="w-full lg:mx-20 max-w-screen-xl items-center overflow-x-hidden py-20 flex flex-col gap-y-20 md:gap-y-60">
							<About ref={aboutRef} />
							<Projects ref={projectsRef} />
							<Contact ref={contactRef} />
						</div>
					</div>
				</div>
			</div>
			<Toaster>
				{(t) => (
					<ToastBar toast={t}>
						{({ icon, message }) => (
							<>
								{icon}
								{message}
								{t.type !== "loading" && <button onClick={() => toast.dismiss(t.id)}>x</button>}
							</>
						)}
					</ToastBar>
				)}
			</Toaster>
		</div>
	);
}
