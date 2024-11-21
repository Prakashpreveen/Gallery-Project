let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("back-btn");
let nextbtn = document.getElementById("next-btn");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

// Function
const rightScroll = () => {
  scrollContainer.scrollLeft += 900;
};
const leftScroll = () => {
  scrollContainer.scrollLeft -= 900;
};
//Add EventListener
nextbtn.addEventListener("click", rightScroll);
backbtn.addEventListener("click", leftScroll);
