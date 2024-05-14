const Observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			window.location.href = "HistoryPage.html #anchor";
		}
	})
},{});
document.querySelectorAll(".back").forEach((entry) => Observer.observe(entry));



const MouseTarget = document.getElementById("thelast");

MouseTarget.addEventListener("mouseenter", (e) => {
	window.location.href = "Conseq.html #container";
});