/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";

const Typewriter = (props) => {
	var { options } = props;
	const [outputList, setOutputList] = useState(["Typewriter Effect"]);
	const [output, setOutput] = useState("");
	const [wordCount, setWordCount] = useState(0);
	const [letterCount, setLetterCount] = useState(0);
	const [loop, setLoop] = useState(false);
	const [type, setType] = useState(true);
	const loopDone = useRef(false);
	const [time, setTime] = useState({ type: 300, remove: 100 });

	useEffect(() => {
		if (options === undefined) options = {};

		if ("strings" in options) {
			if (typeof options.strings === "string") setOutputList([options.strings]);
			else if (typeof options.strings === "object") setOutputList(options.strings);
		}
		if ("loop" in options) setLoop(options.loop);
		if ("typingTime" in options) setTime({ type: options.typingTime, remove: time.remove });
		if ("deletingTime" in options) setTime({ type: time.type, remove: options.deletingTime });
	}, []);

	const typewriterEffect = () => {
		var done = false;
		if (outputList[wordCount] !== output && type) {
			setOutput(output + outputList[wordCount][letterCount]);

			setLetterCount(letterCount + 1);
		} else if (output !== "") {
			setType(false);
			setOutput(output.substring(0, output.length - 1));
		} else {
			done = true;
			setType(true);
			setLetterCount(1);
		}

		if (outputList.length - 1 === wordCount && done && loop) {
			setOutput(outputList[0][0]);

			setWordCount(0);
		} else if (outputList.length - 1 === wordCount && done) {
			setOutput(outputList[outputList.length - 1]);
			loopDone.current = true;
		} else if (done) {
			setOutput(outputList[wordCount + 1][0]);

			setWordCount(wordCount + 1);
		}
	};

	useEffect(() => {
		var timeout = 0;
		const typeTime = type ? time.type : time.remove;

		if (loopDone.current === false) {
			timeout = setTimeout(() => {
				typewriterEffect();
			}, typeTime);
		} else {
			clearTimeout(timeout);
		}

		return function cleanup() {
			clearTimeout(timeout);
		};
	}, [typewriterEffect, output]);

	return (
		<span className="flex">
			{output}
			<div className="animate-blink rounded-full w-5 bg-white self-end h-1 bottom-0" />
		</span>
	);
};

export default Typewriter;
