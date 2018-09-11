
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollY > "0") {
    document.getElementById("navbar").style.height = "5%";
    document.getElementById("navbar").style.zIndex = "10";
  } else {
    document.getElementById("navbar").style.height = "10%";
    document.getElementById("navbar").style.zIndex = "0";
  }
}
