// Trabalhando com animações de digitação em elementos HTML, usando o pacote Typed.js.
var typed = new Typed(".text", {
    strings: ["Programação" , "Desenvolvimento" , "Inovação"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
    shuffle: true,
    startDelay: 1000,
    cursorChar: '|',
    contentType: 'text',
    loopCount: Infinity
});
const toInicio = document.querySelector(".inicio");
document.addEventListener('DOMContentLoaded', function() {
    const toInicio = document.querySelector(".inicio");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toInicio.classList.add("ativo");
        } else {
            toInicio.classList.remove("ativo");
        }
    });
});

