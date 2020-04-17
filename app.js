const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',()=>{
    //Toggle Navigation
        nav.classList.toggle('nav-active');
     //Animate Links
         navLinks.forEach((link,index) => {
        if(link.style.animation){
           link.style.animation = ''; 
        }else{
         link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
         }
         //Burger Animation
         burger.classList.toggle('toggle');
     });
    });

}
navSlide();



// When the user clicks on the button, scroll to the top of the document


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

