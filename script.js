// script.js
document.addEventListener("DOMContentLoaded", () => {
    // 1) Vanta.js for Hero Section
    if (typeof VANTA !== "undefined") {
      VANTA.NET({
        el: "#hero",             // The DOM element to attach the effect
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0077ff,         // Net color
        backgroundColor: 0x1e1e2f, // Hex for the background
        points: 12.0,
        maxDistance: 20.0,
        spacing: 15.0
      });
    }
  
    // 2) GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);
  
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      // We'll skip the hero because Vanta is already doing the fancy background
      if (section.id === "hero") return;
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",  // begin animation when top of section is 80% from top of viewport
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
    });
  
    // 3) Animate Skill Progress Bars
    const progressFills = document.querySelectorAll(".progress-fill");
    progressFills.forEach((fill) => {
      const skillLevel = fill.getAttribute("data-skill-level");
      gsap.fromTo(fill,
        { width: "0%" },
        {
          scrollTrigger: {
            trigger: fill,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          width: skillLevel + "%",
          duration: 1.5,
          ease: "power3.out"
        }
      );
    });
  
    // 4) VanillaTilt for 3D Card Hover
    // Apply tilt to all elements with class "tilt"
    const tiltElements = document.querySelectorAll(".tilt");
    VanillaTilt.init(tiltElements, {
      max: 15,        // max tilt rotation (degrees)
      speed: 400,     // speed of the enter/exit transition
      glare: true,    // enable glare
      "max-glare": 0.4 // from 0 (no glare) to 1 (extreme glare)
    });
  });
  