import { useState, useEffect } from "react";

export const useIntersection = (element, rootMargin, threshold) => {
	const [isVisible, setState] = useState(false);

	useEffect(() => {
		const localElement = element;

		const observer = new IntersectionObserver(
			([entry]) => {
				setState(entry.isIntersecting);
			},
			{ rootMargin: rootMargin, threshold: threshold }
		);

		element.current && observer.observe(localElement.current);

		return function cleanup() {
			observer.unobserve(localElement.current);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isVisible;
};
