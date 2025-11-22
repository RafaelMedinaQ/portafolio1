// Scroll  para los enlaces internos del menú y estas puedan funcionar
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const destino = document.querySelector(enlace.getAttribute("href"));
    if (!destino) return;

    e.preventDefault();
    destino.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
