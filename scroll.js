// Infinite scrolling for .scroll-container with hover pause
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(
    ".scroll-container .container2a"
  );
  let isHovered = false;

  // Infinite scrolling function
  function startScrollContainer(speed) {
    if (!isHovered) {
      scrollContainer.scrollLeft += speed;

      // Reset scroll when reaching the end
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        duplicateContent(scrollContainer);
      }
    }

    requestAnimationFrame(() => startScrollContainer(speed));
  }

  // Clone content to make the infinite scroll seamless
  function duplicateContent(container) {
    const containerContent = container.innerHTML;
    container.innerHTML += containerContent;
  }

  // Duplicate content for seamless infinite scroll
  duplicateContent(scrollContainer);

  // Start automatic scrolling with a set speed
  const scrollSpeed = 1; // Slower speed for .scroll-container
  requestAnimationFrame(() => startScrollContainer(scrollSpeed));

  // Pause scroll on hover
  scrollContainer.addEventListener("mouseover", function () {
    isHovered = true;
  });

  scrollContainer.addEventListener("mouseout", function () {
    isHovered = false;
  });
});
