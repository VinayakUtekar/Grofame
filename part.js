// Infinite scrolling for .part (continuous without stopping)
document.addEventListener("DOMContentLoaded", function () {
  const partContainer = document.querySelector(".part");

  // Infinite scrolling function for .part
  function startScrollPart(speed) {
    partContainer.scrollLeft += speed;

    // Reset scroll when reaching the end
    if (partContainer.scrollLeft >= partContainer.scrollWidth / 2) {
      duplicateContent(partContainer);
    }

    requestAnimationFrame(() => startScrollPart(speed));
  }

  // Clone content to make infinite scroll seamless
  function duplicateContent(container) {
    const containerContent = container.innerHTML;
    container.innerHTML += containerContent;
  }

  // Duplicate content for seamless infinite scroll
  duplicateContent(partContainer);

  // Start automatic scrolling with a set speed
  const scrollSpeed = 4; // Faster speed for .part
  requestAnimationFrame(() => startScrollPart(scrollSpeed));
});
