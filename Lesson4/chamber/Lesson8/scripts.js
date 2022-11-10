const dateElement = document.querySelector("#date")

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

// long, medium, short options ... try them
dateElement.value=fulldateUK;