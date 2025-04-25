// script.js

document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".block");
    const heroText = document.querySelector(".hero-text");
  
    // Fade in effect for hero text
    heroText.style.opacity = 0;
    heroText.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
      heroText.style.opacity = 1;
    }, 300);
  
    // Scroll reveal for power blocks
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.5 });
  
    blocks.forEach(block => {
      block.classList.add("hidden");
      observer.observe(block);
    });
  });

  