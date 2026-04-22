const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav a").forEach((link) => {
  const target = link.getAttribute("href");
  if (target === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("#year").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
