// Open modal with the selected image
function openModal(imageSrc, description) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modal.style.display = "flex";
    modalImg.src = imageSrc;
    caption.innerText = description;
    currentIndex = images.indexOf(imageSrc);
}

// Close modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Navigation for previous/next images
function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modalImg.src = images[currentIndex];
    caption.innerText = images[currentIndex].replace("images/", "").replace("-large.jpg", "").replace(/-/g, " ");
}

// Array of image sources
const images = [
    "images/flowers-pink-large.jpg",
    "images/flowers-purple-large.jpg",
    "images/flowers-red-large.jpg",
    "images/flowers-white-large.jpg",
    "images/flowers-yellow-large.jpg"
];
let currentIndex = 0;
