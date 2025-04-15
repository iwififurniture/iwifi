let images = document.querySelectorAll(".card img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("#wrapper span");

images.forEach((img) => {
  img.addEventListener("click", () => {
    openModal(img.src);
  });
});
 
close.addEventListener("click", () => {
  wrapper.style.display = "none";
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}

