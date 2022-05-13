import { useState, useEffect } from "react";

export const useIntersection = (element, rootMargin) => {
	const [isVisible, setState] = useState(false);

	useEffect(() => {
		const localElement = element;

		const observer = new IntersectionObserver(
			([entry]) => {
				setState(entry.isIntersecting);
			},
			{ rootMargin: rootMargin, threshold: 0.6 }
		);

		element.current && observer.observe(localElement.current);

		return function cleanup() {
			observer.unobserve(localElement.current);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isVisible;
};
