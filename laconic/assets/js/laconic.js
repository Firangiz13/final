var title=document.getElementsByClassName('acc-title');

for (var i = 0; i<title.length; i++) {
	title[i].addEventListener('click', function(){
		this.classList.toggle("active3");
    var content=this.nextElementSibling;
		if (content.style.display==="block"){
			content.style.display="none";
		}
		else{
			content.style.display="block";
		}
	})		
}

var btn=document.querySelector(".burger");
btn.addEventListener("click", function(){
	var menu=document.getElementById("add").classList.toggle("add-new");
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("carousel-item2");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}



var slideIndex = 1;
showSlide(slideIndex);

function addSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("img-slide");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";
}


autoSlide();
function autoSlide() {
  alert("hi")
  var slides = document.getElementsByClassName("img-slide");
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  if (n > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";
  n++;
  setTimeout(autoSlide,
    );
}


var slideIndex = 1;
show(slideIndex);

function newSlides(n) {
  show(slideIndex += n);
}

function currentSlide(n) {
  show(slideIndex = n);
}

function show(n) {
  var slides = document.getElementsByClassName("overlay");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}

function search() {
  var input = document.querySelector(".press");
  var times = document.querySelector("#last");
  input.style.display ="block";
  times.style.display ="block";
  times.style.zIndex ="2";
}
function times() {
  var input = document.querySelector(".press");
  var times = document.querySelector("#last");
  input.style.display ="none";
  times.style.display ="none";
}




var color =document.getElementsByClassName("list-item");
for (var i = 0; i<color.length; i++) {
  color[i].addEventListener("click",function () {
    this.style.color ="red";
  })
}
var tablinks=document.querySelectorAll(".tab");
for (var i=0; i<tablinks.length; i++) {
 	tablinks[i].addEventListener("click", function(){
 		this.classList.add("tab-active");
    var tabpanels=document.querySelectorAll(".tab-panel");
    if (tabpanels.style.display === "block") {
      tabpanels.style.display = "none";
    }
    else{
      tabpanels.style.display = "block";
    }
 	})
}

 




 function all(){
    var btn=document.querySelector(".more");
    var allimages=document.getElementsByClassName("hidden");
      allimages.classList.remove("hidden")
      btn.style.display = "none"
    }

window.onscroll = function showheader(argument) {
  var header = document.querySelector(".navbar");

  if (window.pageYOffset = 200) {
    header.classList.add("navbar-fixed");
  }
  else{
    header.classList.remove("navbar-fixed");
  }
}

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        autoPlay:true
    });
});

var app = document.getElementById("filter-item1");
app.addEventListener("click", function(){
  var portfolio = document.getElementsByClassName("portfolio");
  var telephone = document.getElementById("telephone")
  for (var i =0; i<portfolio.length; i++) {
   portfolio[i].style.display = "none";
  }
  telephone.style.display = "block";
})



