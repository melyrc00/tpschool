
document.addEventListener("click", function (event) {
    let navbar = document.getElementById("navbarNav") // Menú
    let toggler = document.querySelector(".navbar-toggler") // Botón hamburguesa

    // Si el menú está abierto y el clic NO es dentro del menú ni del botón, lo cierra
    if (navbar.classList.contains("show") && !navbar.contains(event.target) && !toggler.contains(event.target)) {
        toggler.click()}
});
