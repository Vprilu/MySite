let dots1 = document.getElementById("item1");
let dots2 = document.getElementById("item2");
let dots3 = document.getElementById("item3");
let dots4 = document.getElementById("item4");
let works__item1 = document.getElementById("works__item1");
let works__item2 = document.getElementById("works__item2");
let works__item3 = document.getElementById("works__item3");
let works__item4 = document.getElementById("works__item4");
let wrapper = document.getElementById("item");
let load = document.getElementById("load");
let headers = document.querySelectorAll("section>h1");

function closed() {
	wrapper.classList.toggle("wrapper__iframe_hidden");
	dots1.classList.add("wrapper__iframe_hidden");
	dots2.classList.add("wrapper__iframe_hidden");
	dots3.classList.add("wrapper__iframe_hidden");
	dots4.classList.add("wrapper__iframe_hidden");
	load.classList.add("hidden");
	load.offsetWidth
	load.classList.remove("hidden");
}

function popup1() {
	wrapper.classList.toggle("wrapper__iframe_hidden");
	dots1.classList.toggle("wrapper__iframe_hidden");
	load.classList.add("hidden");
	load.offsetWidth
	load.classList.remove("hidden");
}
function popup2() {
	wrapper.classList.toggle("wrapper__iframe_hidden");
	dots2.classList.toggle("wrapper__iframe_hidden");
	load.classList.add("hidden");
	load.offsetWidth
	load.classList.remove("hidden");
}
function popup3() {
	wrapper.classList.toggle("wrapper__iframe_hidden");
	dots3.classList.toggle("wrapper__iframe_hidden");
	load.classList.add("hidden");
	load.offsetWidth
	load.classList.remove("hidden");
}
function popup4() {
	wrapper.classList.toggle("wrapper__iframe_hidden");
	dots4.classList.toggle("wrapper__iframe_hidden");
	load.classList.add("hidden");
	load.offsetWidth
	load.classList.remove("hidden");
}

setInterval(head_text, 10000);

function head_text() {
	for (var head in headers) {
		headers[head].classList.toggle("header__text_hidden")
	}
}


document.onmousemove = function (e) {
	mouseX = e.clientX
	mouseY = e.clientY
};

setInterval(dots_movie, 10);

function dots_movie() {
	works__item1.style.transform = "transition(" + movieX + ")";
}