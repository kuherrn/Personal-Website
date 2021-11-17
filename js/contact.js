// JS to enable the toggle action on the contacts
// Toggling will also add a bottom border to the corresponding sections
let togglers = document.querySelectorAll(".toggler");

for(toggler of togglers) {
  toggler.addEventListener('click', function(e) {
    if(e.target.innerText === "Global Contacts") {
      toggle("card1", "globalContacts");
    } else if (e.target.innerText === "Commercial Aircraft") {
      toggle("card2", "commercialAircraft");
    }
  });
}

let toggle = function(selector, parentSelector) {
  let element = document.getElementById(`${selector}`);
  let parentElement = document.getElementById(`${parentSelector}`)

  if (element.classList.contains("hide")) {
    element.classList.remove("hide");
    parentElement.style.borderTopColor = "black";
    parentElement.style.borderBottomColor = "black";
  } else {
    element.classList.add("hide");
    parentElement.style.borderTopColor = "transparent";
    parentElement.onmouseover = function () {
      parentElement.style.borderBottomColor = "black";
    }
    parentElement.onmouseleave = function () {
      parentElement.style.borderBottomColor = "transparent";
    }
  }
};

// Separate logic for the form toggling since no border is being added
let formToggler = document.querySelector(".formToggler");

formToggler.addEventListener("click", function() {
  let formElement = document.getElementById("card3");

  if (formElement.classList.contains("hide")) {
    formElement.classList.remove("hide");
  } else {
    formElement.classList.add("hide");
  }
})



