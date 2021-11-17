// jQuery for the automatic comments slideshow 
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow");
}, 5000);

// JS for the image slideshow
let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", function () {
  slideIndex--;
  showSlides(slideIndex);
});

next.addEventListener("click", function () {
  slideIndex++;
  showSlides(slideIndex);
});

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  // Wrap around control statements
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all of the images first
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Set the images to appear according to the slideIndex value
  slides[slideIndex - 1].style.display = "block";
}
