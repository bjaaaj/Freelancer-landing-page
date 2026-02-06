function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.textContent = "Thanks! I'll get back to you soon 🚀";
  msg.style.color = "#38bdf8";
  form.reset();
});
const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));
const glow = document.querySelector(".cursor-glow");

// Disable on touch devices
if ("ontouchstart" in window) {
  glow.style.display = "none";
}

document.addEventListener("mousemove", e => {
  glow.style.opacity = "1";

  glow.animate(
    {
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    },
    {
      duration: 120,
      fill: "forwards"
    }
  );
});

document.addEventListener("mouseleave", () => {
  glow.style.opacity = "0";
});