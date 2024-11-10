// Function to load and play video
function loadVideo(videoSrc) {
  // Hide images and show video container
  document.getElementById("video-container").style.display = "block";
  document.body.classList.add("video-playing");

  // Load and play the video
  var videoEl = document.getElementById("video");
  var sourceEl = videoEl.getElementsByTagName("source")[0];
  sourceEl.src = videoSrc; // Set the video source
  videoEl.load();
  videoEl.play();
}

// Function to close the video popup
function closeVideo() {
  // Pause the video
  var videoEl = document.getElementById("video");
  videoEl.pause();

  // Hide video container and show images
  document.getElementById("video-container").style.display = "none";
  document.getElementById("image-container").classList.remove("hidden");
  document.body.classList.remove("video-playing");
}

// Infinite scrolling logic
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".container2a");
  const partContainer = document.querySelector(".part");

  let isHovered = false;

  // Infinite scrolling for .container2a with hover pause
  function startScrollContainer(speed) {
    if (!isHovered) {
      scrollContainer.scrollLeft += speed;

      // Reset scroll when reaching end
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    }

    requestAnimationFrame(() => startScrollContainer(speed));
  }

  // Infinite scrolling for .part (continuous without stopping)
  function startScrollPart(speed) {
    partContainer.scrollLeft += speed;

    // Reset scroll when reaching end
    if (partContainer.scrollLeft >= partContainer.scrollWidth / 2) {
      partContainer.scrollLeft = 0;
    }

    requestAnimationFrame(() => startScrollPart(speed));
  }

  // Clone content to make the infinite scroll effect seamless
  function duplicateContent(container) {
    const containerContent = container.innerHTML;
    container.innerHTML += containerContent;
  }

  // Duplicate content for seamless infinite scroll
  duplicateContent(scrollContainer);
  duplicateContent(partContainer);

  // Start automatic scrolling with different speeds
  const scrollSpeedContainer = 1; // Slower speed for .container2a
  const scrollSpeedPart = 4; // Faster speed for .part

  // Start scrolling both containers
  requestAnimationFrame(() => startScrollContainer(scrollSpeedContainer));
  requestAnimationFrame(() => startScrollPart(scrollSpeedPart));

  // Pause .container2a on hover
  scrollContainer.addEventListener("mouseover", function () {
    isHovered = true;
  });

  scrollContainer.addEventListener("mouseout", function () {
    isHovered = false;
  });
});
