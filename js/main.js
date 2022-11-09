const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footer = document.querySelector(".footer");
const footerYear = document.querySelector(".footer__year");

const handleNAv = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	//po wybraniu freezuje
	// document.body.classList.toggle("body--hold");
	// footer.classList.toggle("footer--inactive");
};

navBtn.addEventListener("click", handleNAv);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
