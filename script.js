const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Replace this with your WhatsApp number in international format, without + or spaces.
  const whatsappNumber = "918639666154";
  const data = new FormData(this);
  const message = [
    "Hello PixelWave Studio,",
    "",
    "My name: " + (data.get("name") || ""),
    "Business: " + (data.get("business") || "Not provided"),
    "Requirement: " + data.get("need"),
    "Project brief: " + (data.get("brief") || "I'd like to discuss a website.")
  ].join("\\n");
  if (whatsappNumber.includes("X")) {
    alert("Demo form ready! Please add your WhatsApp number in script.js before publishing.");
    return;
  }
  window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message), "_blank");
});
