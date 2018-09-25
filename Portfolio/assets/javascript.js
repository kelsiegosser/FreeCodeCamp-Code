
var dotClass = document.getElementsByClassName("scroll-dot");

window.onscroll = function() {
    scrollFunctionHeader()
};

function scrollFunctionHeader() {
    if (window.scrollY > "0") {
        document.getElementById("navbar").style.height = "5%";
        document.getElementById("navbar").style.zIndex = "10";
        document.getElementById("navHeader").style.fontSize = "20px";
        document.getElementById("scroll").style.color = "white";
        // document.getElementsByClassName("dot").style.backgroundColor = "white";
        for (var i=0; i<dotClass.length; i++) {
            dotClass[i].style.backgroundColor = "white";
        }
    } else {
        document.getElementById("navbar").style.height = "10%";
        document.getElementById("navbar").style.zIndex = "0";
        document.getElementById("navHeader").style.fontSize = "32px";
        document.getElementById("scroll").style.color = "#DDD8D8";
        // document.getElementsByClassName("dot").style.backgroundColor = "#
        for (var i=0; i<dotClass.length; i++) {
            dotClass[i].style.backgroundColor = "#DDD8D8";
        };
    }
}


// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
