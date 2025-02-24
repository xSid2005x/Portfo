document.addEventListener("DOMContentLoaded", () => {
  // 1) Vanta.js for Hero Section
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

  // 2) GSAP Scroll Animations for Sections (now set to re-trigger on both enter & enterBack)
  gsap.registerPlugin(ScrollTrigger);
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id === "hero") return;
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "restart none restart none" // re-animate every time it enters
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  // 3) Animate Skill Progress Bars (re-trigger on every scroll into view)
  const progressFills = document.querySelectorAll(".progress-fill");
  progressFills.forEach((fill) => {
    const skillLevel = fill.getAttribute("data-skill-level");
    gsap.fromTo(fill, 
      { width: "0%" },
      {
        scrollTrigger: {
          trigger: fill,
          start: "top 80%",
          toggleActions: "restart none restart none"
        },
        width: skillLevel + "%",
        duration: 1.5,
        ease: "power3.out"
      }
    );
  });

  // 4) VanillaTilt for 3D Card Hover
  const tiltElements = document.querySelectorAll(".tilt");
  VanillaTilt.init(tiltElements, {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.4
  });

  // 5) Animate Timeline Items (re-trigger on each scroll in)
  gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.fromTo(item,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "restart none restart none"
        }
      }
    );
  });

  // 6) Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Rotate the icon for a smooth effect
    if(document.body.classList.contains('light-mode')) {
      themeIcon.style.transform = 'rotate(180deg)';
      // Switch icon to sun (light mode indicator)
      themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/sun.png';
    } else {
      themeIcon.style.transform = 'rotate(0deg)';
      // Switch icon back to moon (dark mode indicator)
      themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png';
    }
  });
});
