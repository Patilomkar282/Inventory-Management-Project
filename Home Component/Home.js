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
}

