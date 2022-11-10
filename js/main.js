const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footer = document.querySelector(".footer");
const footerYear = document.querySelector(".footer__year");
const topBtn = document.querySelector(".top-btn");

const navLinks = navMobile.querySelectorAll(".nav__link");

const backToTop = () => {
	// document.body.scrollTop = 0; // For Safari
	// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	window.location = "#header";
};
const handleNAv = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	document.body.classList.toggle("body--hold");
	footer.classList.toggle("footer--inactive");
	navLinks.forEach((link) => {
		if (navMobile.classList.contains("nav-mobile--active")) {
			link.addEventListener("click", handleNAv);
		}
	});
	if (navBtn.classList.contains("is-active")) {
		backToTop();
	}
};
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const handleTopObserver = () => {
	if (window.scrollY >= 100) {
		topBtn.classList.add("top-btn--active");
	} else {
		topBtn.classList.remove("top-btn--active");
	}
};
const handleNavObserver = () => {
	if (
		navMobile.classList.contains("nav-mobile--active") &&
		window.innerWidth >= 992
	) {
		handleNAv();
	}
};

handleCurrentYear();
navBtn.addEventListener("click", handleNAv);
topBtn.addEventListener("click", backToTop);
window.addEventListener("scroll", handleTopObserver);
window.addEventListener("resize", handleNavObserver);
