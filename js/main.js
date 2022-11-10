const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const footer = document.querySelector(".footer");
const footerYear = document.querySelector(".footer__year");

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
		// document.body.scrollTop = 0; // For Safari
		// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		window.location = "#header";
	}
};

navBtn.addEventListener("click", handleNAv);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
