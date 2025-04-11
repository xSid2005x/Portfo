document.addEventListener("DOMContentLoaded", () => {
  // Vanta Background
  if (typeof VANTA !== "undefined") {
    VANTA.NET({
      el: "#hero",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0077ff,
      backgroundColor: 0x1e1e2f,
      points: 12.0,
      maxDistance: 20.0,
      spacing: 15.0
    });
  }

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll("section").forEach((section) => {
    if (section.id === "hero") return;
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "restart none restart none"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      themeIcon.style.transform = 'rotate(180deg)';
      themeIcon.src = 'https://img.icons8.com/ios-filled/50/000000/sun--v1.png';
    } else {
      themeIcon.style.transform = 'rotate(0deg)';
      themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png';
    }
  });
});
