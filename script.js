// const navUl = document.getElementById("nav-links");

// navUl.addEventListener("mouseenter", () => (navUl.dataset.visible = "true"));
// navUl.addEventListener("mouseleave", () => (navUl.dataset.visible = "false"));
// navUl.addEventListener("mousemove", (e) => {
// 	if (e.target === navUl) {
// 		navUl.style = `
//     --pos-x: ${e.offsetX}px;
//     --pos-y: ${e.offsetY}px;
//     `;
// 	} else {
// 		const rect = navUl.getBoundingClientRect();
// 		const x = e.clientX - rect.left;
// 		const y = e.clientY - rect.top;

// 		navUl.style = `
//   --pos-x: ${x}px;
//   --pos-y: ${y}px;
//   `;
// 	}
// });

// const langOptions = document.querySelectorAll("#dropdown-langs li");

// langOptions.forEach((option) => {
// 	function handler(e) {
// 		if (
// 			e.key === "Enter" ||
// 			e.key === " " ||
// 			(e.type === "click" && e.target.name == "lang")
// 		) {
// 			const ele = document.getElementById("selected-lang");

// 			ele.innerHTML = e.target.labels[0].innerHTML;
// 		}
// 	}

// 	option.addEventListener("keyup", handler);
// 	option.addEventListener("click", handler);
// });

// const currencyOptions = document.querySelectorAll("#dropdown-currencies li");

// currencyOptions.forEach((option) => {
// 	function handler(e) {
// 		if (
// 			e.key === "Enter" ||
// 			e.key === " " ||
// 			(e.type === "click" && e.target.name == "currency")
// 		) {
// 			const ele = document.getElementById("selected-currency");

// 			ele.innerHTML = e.target.labels[0].innerHTML;
// 		}
// 	}

// 	option.addEventListener("keyup", handler);
// 	option.addEventListener("click", handler);
// });

// const partOptions = document.querySelectorAll("#dropdown-parts li");

// partOptions.forEach((option) => {
// 	function handler(e) {
// 		if (
// 			e.key === "Enter" ||
// 			e.key === " " ||
// 			(e.type === "click" && e.target.name == "part")
// 		) {
// 			const ele = document.getElementById("selected-part");

// 			ele.innerHTML = e.target.labels[0].innerHTML;
// 		}
// 	}

// 	option.addEventListener("keyup", handler);
// 	option.addEventListener("click", handler);
// });

// // Hero Info Slider
// let index = 0;
// const slider = document.getElementById("slider");
// const indicator = document.getElementById("indicator");

// setInterval(() => {
// 	const children = indicator.children;

// 	index = index >= 2 ? 0 : index + 1;
// 	slider.style = `--active-info: ${index};`;

// 	for (let i = 0; i < children.length; i++) {
// 		const ele = children[i];

// 		if (ele.classList.contains("active")) {
// 			ele.classList.remove("active");

// 			break;
// 		}
// 	}

// 	children[index].classList.add("active");
// }, 6000);

// // brand display video control
// const vids = document.querySelectorAll(".brand__video");

// vids.forEach((ele) => ele.addEventListener("mouseover", () => ele.play()));
// vids.forEach((ele) =>
// 	ele.addEventListener("mouseleave", () => {
// 		if (ele.playing) {
// 			ele.currentTime = 0;
// 			ele.pause();
// 		}
// 	})
// );

// // Product Slider Function
// const rimC = document.getElementById("rim-control");
// const coilC = document.getElementById("coil-control");
// const testimonialC = document.getElementById("testimonial-control");
// let moves = {
// 	rim: 0,
// 	coil: 0,
// 	testimonial: 0,
// };

// for (let i = 0; i < rimC.children.length; i++) {
// 	const ele = rimC.children[i];
// 	ele.addEventListener("click", (e) => moveSlider("rim", e.target.id));
// }

// for (let i = 0; i < coilC.children.length; i++) {
// 	const ele = coilC.children[i];
// 	ele.addEventListener("click", (e) => moveSlider("coil", e.target.id));
// }

// for (let i = 0; i < testimonialC.children.length; i++) {
// 	const ele = testimonialC.children[i];
// 	ele.addEventListener("click", (e) => moveSlider("testimonial", e.target.id));
// }

// function moveSlider(id, direction) {
// 	const wrapper = document.getElementById(`${id}-slider-wrapper`);
// 	const control = document.getElementById(`${id}-control`);
// 	const slider = document.getElementById(`${id}-slider`);
// 	const wrapperWidth = wrapper.clientWidth;
// 	const sliderWidth = slider.scrollWidth;
// 	const translateWidth = slider.children[0].scrollWidth + 8;
// 	const widthLeft = sliderWidth - wrapperWidth;

// 	if (direction === "left") {
// 		if (moves[id] <= 0) {
// 			moves[id] = 0;
// 			control.children[0].setAttribute("disabled", "");

// 			return;
// 		}
// 		if (moves[id] - translateWidth <= 0)
// 			control.children[0].setAttribute("disabled", "");
// 		else control.children[1].removeAttribute("disabled");

// 		moves[id] = moves[id] - translateWidth < 0 ? 0 : moves[id] - translateWidth;
// 		slider.style.transform = `translateX(-${moves[id]}px)`;
// 	}

// 	if (direction === "right") {
// 		if (moves[id] >= widthLeft) {
// 			moves[id] = widthLeft;
// 			control.children[1].setAttribute("disabled", "");

// 			return;
// 		}
// 		if (moves[id] + translateWidth >= widthLeft)
// 			control.children[1].setAttribute("disabled", "");
// 		else control.children[0].removeAttribute("disabled");

// 		moves[id] =
// 			moves[id] + translateWidth > widthLeft
// 				? widthLeft
// 				: moves[id] + translateWidth;
// 		slider.style.transform = `translateX(-${moves[id]}px)`;
// 	}
// }

// // Footer cursor animation
// const footer = document.getElementById("footer-wrapper");

// footer.addEventListener("mouseenter", () => (footer.dataset.visible = "true"));
// footer.addEventListener("mouseleave", () => (footer.dataset.visible = "false"));
// footer.addEventListener("mousemove", (e) => {
// 	if (e.target === footer) {
// 		footer.style = `
//     --pos-x: ${e.offsetX}px;
//     --pos-y: ${e.offsetY}px;
//     `;
// 	} else {
// 		const rect = footer.getBoundingClientRect();
// 		const x = e.clientX - rect.left;
// 		const y = e.clientY - rect.top;

// 		footer.style = `
//   --pos-x: ${x}px;
//   --pos-y: ${y}px;
//   `;
// 	}
// });

// In-view animations
const observer = new IntersectionObserver(
	(entries, _) =>
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.dataset.state = "visible";
			}
		}),
	{
		root: null,
		rootMargin: "0px",
		threshold: 0.2,
	}
);

const heroSection = document.getElementById("hero-section");
const brandSection = document.getElementById("brand-section");
const wheelSection = document.getElementById("wheel-section");
const coilSection = document.getElementById("coil-section");
const merchSection = document.getElementById("merch-section");
const testimonialSection = document.getElementById("testimonial-section");
const gallerySection = document.getElementById("gallery-section");
const footerSection = document.getElementById("footer-section");

observer.observe(heroSection);
observer.observe(brandSection);
observer.observe(wheelSection);
observer.observe(coilSection);
observer.observe(merchSection);
observer.observe(testimonialSection);
observer.observe(gallerySection);
observer.observe(footerSection);

function backToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
