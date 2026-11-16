
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeBtn");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImage.src = image.src;
    });
});

modal.addEventListener("click", function() {
    modal.style.display = "none";
});

modalContent.addEventListener("click", function(event) {
    event.stopPropagation();
});

closeBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    modal.style.display = "none";
});
