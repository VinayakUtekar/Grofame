// Function to load and play video
function loadVideo(videoSrc) {
  // Show the video container and hide other content
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

  // Hide the video container and show other content
  document.getElementById("video-container").style.display = "none";
  document.body.classList.remove("video-playing");
}
