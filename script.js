// Countdown Timer
const countdownDate = new Date("June 21, 2025 09:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "<h3>🎉 It's Time! 🎉</h3>";
  }
}, 1000);

// Slideshow Preview
function showPreview() {
  const overlay = document.getElementById("preview-overlay");
  const images = document.querySelectorAll(".preview-img");
  let index = 0;

  overlay.style.display = "flex";

  function showImage(i) {
    images.forEach((img, idx) => {
      img.classList.remove("active");
      if (idx === i) img.classList.add("active");
    });
  }

  showImage(index);
  const slideInterval = setInterval(() => {
    index++;
    if (index < images.length) {
      showImage(index);
    } else {
      clearInterval(slideInterval);
    }
  }, 1500);
}

function continueToMeet() {
  window.location.href = "https://meet.google.com/ter-qipr-ukn";
}