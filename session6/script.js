document.addEventListener("DOMContentLoaded", function () {
  // Spin Button Logic
  const spinButton = document.getElementById("spinButton");
  const buttonContainer = document.querySelector(".button-container");

  let rotated = false;

  spinButton.addEventListener("click", function () {
      rotated = !rotated;
      buttonContainer.classList.toggle("active");
  
      // Rotate the button
      spinButton.style.transition = "transform 1s ease-in-out";
      spinButton.style.transform = rotated ? "rotate(180deg)" : "rotate(0deg)";
  });

  // Book Opening Logic (toggle open on click)
  const book = document.querySelector('.book');

  book.addEventListener("click", function () {
      // Toggle the "open" class to open the book on click
      book.classList.toggle('open');
  });
});
