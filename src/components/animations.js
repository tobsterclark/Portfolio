export const animations = () => {
	//make it so it only animates once

	const fadeCallback = function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate-fadeIn");
			} else {
				entry.target.classList.remove("animate-fadeIn");
			}
		});
	};

	const fadeObserver = new IntersectionObserver(fadeCallback);

	const fadeTargets = document.querySelectorAll(".js-fadeIn");
	fadeTargets.forEach(function (target) {
		target.classList.add("opacity-0");
		fadeObserver.observe(target);
	});

	const slideLeftCallback = function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("transition-all", "ease-in-out", "duration-1000");
				entry.target.classList.remove("transform", "-translate-x-60");
			} else {
				entry.target.classList.remove("transition-all", "ease-in-out", "duration-1000");
				entry.target.classList.add("transform", "-translate-x-60");
			}
		});
	};

	const slideLeftObserver = new IntersectionObserver(slideLeftCallback);

	const slideLeftTargets = document.querySelectorAll(".js-slideLeft");
	slideLeftTargets.forEach(function (target) {
		target.classList.add("transform", "-translate-x-60");
		slideLeftObserver.observe(target);
	});

	const slideRightCallback = function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("transition-all", "ease-in-out", "duration-1000");
				entry.target.classList.remove("transform", "translate-x-60");
			} else {
				entry.target.classList.remove("transition-all", "ease-in-out", "duration-1000");
				entry.target.classList.add("transform", "translate-x-60");
			}
		});
	};

	const slideRightObserver = new IntersectionObserver(slideRightCallback);

	const slideRightTargets = document.querySelectorAll(".js-slideRight");
	slideRightTargets.forEach(function (target) {
		target.classList.add("transform", "translate-x-60");
		slideRightObserver.observe(target);
	});
};
