// select the elements to manipulate (output to)
const dateElement = document.querySelector(".date");

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

// long, medium, short options ... try them
dateElement.innerHTML=fulldateUK;


const ham_menu = document.querySelector(".ham_menu");
const first_nav = document.querySelector(".first_nav");

ham_menu.addEventListener("click",() => {
    firstnav.classList.toggle('responsive')}, false);  //I don't understand this

    window.onresize = () => {if (window.innerWidth > 760);  //I don't understand this 