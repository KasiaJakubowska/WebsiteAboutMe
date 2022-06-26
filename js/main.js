document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 250) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => navList.classList.remove("show"))
	);

	window.addEventListener("scroll", addShadow);
});

//CAROUSELE//

const swiper = new Swiper(".swiper", {
	loop: true,

	slidesPerView: 3,
	spaceBetween: 30,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
});
