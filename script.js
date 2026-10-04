
document.addEventListener("DOMContentLoaded", () => {
  // Ano atual no rodapé, caso exista um elemento para o mostrar
  const yearElement = document.querySelector("[data-year]");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Navegação suave para as secções
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Efeito de entrada dos painéis quando aparecem no ecrã
  const panels = document.querySelectorAll(".stat, .map-placeholder");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    panels.forEach((panel) => observer.observe(panel));
  } else {
    panels.forEach((panel) => panel.classList.add("visible"));
  }

  // Aviso claro de que os valores são apenas demonstrativos
  console.info("LuandaSat iniciado em modo de demonstração.");
});
                              
