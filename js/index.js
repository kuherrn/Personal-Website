// JS for the images to play automatically and for the <h1> heading to move to a brighter part of the image to ensure the text is readable
// Referance: https://www.w3schools.com/howto/howto_js_slideshow.asp

mySlides = ["1", "0", "1", "1", "1"];
let slideIndex = 0;
let i = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let heading = document.querySelector(".heading");
  
  // Hide all of the images first
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (i > mySlides.length - 1) {
    i = 0;
  }

  // Set the first image to appear
  slides[slideIndex - 1].style.display = "block";
  // Where the mySlides array has an element value of "1", set the heading to be 25% top of the header container
  if (mySlides[i] === "1") {
    heading.style.top = "25%";
    i++;
  // Else, set the heading to be 85% top of the header container
  } else {
    heading.style.top = "85%";
    i++;
  }
  
  // Change image every 10 seconds
  setTimeout(showSlides, 10000);
}
