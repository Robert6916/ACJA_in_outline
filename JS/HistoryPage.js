document.getElementById("point_first").addEventListener("click", function(){
   document.getElementById("my_modal").classList.add("open");	
})
document.getElementById("close_button").addEventListener("click", function(){
   document.getElementById("my_modal").classList.remove("open");	
})


document.getElementById("point_second").addEventListener("click", function(){
   document.getElementById("my_modal_2").classList.add("open");	
})
document.getElementById("close_button_2").addEventListener("click", function(){
   document.getElementById("my_modal_2").classList.remove("open");	
})


document.getElementById("point_third").addEventListener("click", function(){
   document.getElementById("my_modal_3").classList.add("open");	
})
document.getElementById("close_button_3").addEventListener("click", function(){
   document.getElementById("my_modal_3").classList.remove("open");	
})


document.getElementById("point_fourth").addEventListener("click", function(){
   document.getElementById("my_modal_4").classList.add("open");	
})
document.getElementById("close_button_4").addEventListener("click", function(){
   document.getElementById("my_modal_4").classList.remove("open");	
})


document.getElementById("point_fifth").addEventListener("click", function(){
   document.getElementById("my_modal_5").classList.add("open");	
})
document.getElementById("close_button_5").addEventListener("click", function(){
   document.getElementById("my_modal_5").classList.remove("open");	
})


document.getElementById("point_sixth").addEventListener("click", function(){
   document.getElementById("my_modal_6").classList.add("open");	
})
document.getElementById("close_button_6").addEventListener("click", function(){
   document.getElementById("my_modal_6").classList.remove("open");	
})


document.getElementById("point_seventh").addEventListener("click", function(){
   document.getElementById("my_modal_7").classList.add("open");	
})
document.getElementById("close_button_7").addEventListener("click", function(){
   document.getElementById("my_modal_7").classList.remove("open");	
})


document.getElementById("point_eighth").addEventListener("click", function(){
   document.getElementById("my_modal_8").classList.add("open");	
})
document.getElementById("close_button_8").addEventListener("click", function(){
   document.getElementById("my_modal_8").classList.remove("open");	
})


document.getElementById("point_ninth").addEventListener("click", function(){
   document.getElementById("my_modal_9").classList.add("open");	
})
document.getElementById("close_button_9").addEventListener("click", function(){
   document.getElementById("my_modal_9").classList.remove("open");	
})


document.getElementById("point_tenth").addEventListener("click", function(){
   document.getElementById("my_modal_10").classList.add("open");	
})
document.getElementById("close_button_10").addEventListener("click", function(){
   document.getElementById("my_modal_10").classList.remove("open");	
})

const Observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			window.location.href = "https://robert6916.github.io/ACJA_in_outline/Fan.html#title_1";
		}
	})
},{});

document.querySelectorAll(".thelast").forEach((entry) => Observer.observe(entry));
