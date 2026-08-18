function start(){
  let email = document.querySelector("input").value;

  if(email === ""){
    alert("Please enter email");
  }
  else{
    alert("Welcome! " + email);
  }
}
const carousel = document.getElementById("carousel");

/*function scrollLeft() {
  carousel.scrollBy({
    left: -300,
    behavior: "smooth"
  });
} */

function scrollRight() {
  carousel.scrollBy({
    left: 300,
    behavior: "smooth"
  });
}
 
function scrollLeft() {
    carousel.scrollBy({
        left: -300,
        behavior: "smooth"

    });
}

