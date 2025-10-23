document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");

  const indicator = document.createElement("div");
  indicator.classList.add("nav-indicator");
  nav.appendChild(indicator);

  function moveIndicator(element) {
    indicator.style.width = `${element.offsetWidth}px`;
    indicator.style.left = `${element.offsetLeft}px`;
    indicator.style.opacity = "1";
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      moveIndicator(e.target);
    });
  });

  nav.addEventListener("mouseleave", () => {
    indicator.style.opacity = "0";
  });
});

//oi

document.addEventListener("DOMContentLoaded", () => {
  const formReceita = document.getElementById("form-receita");

  if (formReceita) {
    formReceita.addEventListener("submit", (event) => {
      event.preventDefault();

      const titulo = document.getElementById("titulo").value;
      if (titulo.length < 5) {
        alert("O título da receita precisa ter pelo menos 5 caracteres.");
        return;
      }

      console.log("Formulário válido, pronto para enviar.");
    });
  }
});
