document.addEventListener("DOMContentLoaded", function () {
  const heart = document.querySelector(".heart");
  const messageContainer = document.querySelector(".message-container");
  const imageContainer = document.querySelector(".image-container");

  // Set a delay before replacing the heart with the message and image
  setTimeout(() => {
    heart.style.opacity = "0"; // Gradually hide the heart
    messageContainer.style.opacity = "1"; // Show the message
    imageContainer.style.opacity = "1"; // Show the image
  }, 3000); // 3 seconds delay after heartbeat
});
