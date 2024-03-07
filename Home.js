document.getElementById("dark-mode-button").onclick = function()
 { 
    myFunction(); 
};
function myFunction()
  { 
    var element = document.body;
    element.classList.toggle("dark-mode"); 
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("nav-dark"); 
};
 



var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = (currentImg + 1) % imgs.length; // update the index number

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}

changeSlide();

var timer = setInterval(changeSlide, interval);

