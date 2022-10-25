// select the elements to manipulate (output to)
const dateElement = document.querySelector(".date");

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

// long, medium, short options ... try them
dateElement.innerHTML=fulldateUK;

if (now.getDay() === 1 || now.getDay() === 2){
    document.querySelector(".banner").style.display = "block"

}

const ham_menu = document.querySelector(".ham_menu");
const first_nav = document.querySelector(".first_nav");

ham_menu.addEventListener("click",() => {
    first_nav.classList.toggle('responsive')}, false);  //I don't understand this

    window.onresize = () => {if (window.innerWidth > 760);  //I don't understand this 
    }   

// Date late modification
const dateModifiedSpan = document.querySelector("#lastmodified")
dateModifiedSpan.innerHTML = document.lastModified

document.lastModified