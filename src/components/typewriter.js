import React, { useEffect, useState, useRef, useCallback } from "react";

const Typewriter = (props) => {
	var { options } = props;
	var outputList = ["Typewriter Effect"];
	const [output, setOutput] = useState("");
	const cleanup = useRef(false);

	if (options === undefined) options = {};

	if ("strings" in options) {
		outputList = options.strings;
	}

	const typewriterEffect = useCallback(() => {
		(async () => {
			while (true) {
				for (let i in outputList) {
					console.log("loop");
					if (cleanup.current) return;

					setOutput(outputList[i]);
					await new Promise((r) => setTimeout(r, 500));
				}
			}
		})();
	}, []);

	useEffect(() => {
		typewriterEffect();

		return function cleanup() {
			cleanup.current = true;
		};
	}, []);

	return <span>{output}</span>;
};

export default Typewriter;
