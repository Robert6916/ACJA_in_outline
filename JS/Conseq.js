const Observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			window.location.href = "Ambig.html";
		}
	})
},{});
document.querySelectorAll(".thelast").forEach((entry) => Observer.observe(entry));