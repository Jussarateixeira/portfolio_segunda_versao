document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".cabecalho__menu__link");
    menuLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "white";
            this.style.backgroundColor = "var(--cor-terciaria)";
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "var(--cor-terciaria)";
            this.style.backgroundColor = "transparent";
        });
    });
});
