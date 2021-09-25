/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("autohide-navbar");
document.getElementById("nav-spacer").style.height = navbar.offsetHeight*2+"px"; 
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    console.log();
    navbar.style.top = "-"+navbar.offsetHeight+"px";
  }
  prevScrollpos = currentScrollPos;
} 