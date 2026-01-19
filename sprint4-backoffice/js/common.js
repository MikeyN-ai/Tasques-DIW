document.addEventListener("DOMContentLoaded", main);

function main() {

    // Configuració del botó de hamburguesa
    const menu_hamburguesa = document.getElementById("menu_hamburguesa");
    const nav = document.getElementById("menu_lateral");

    // Gestió del menú de hamburguesa
    menu_hamburguesa.addEventListener("click", (e) => {
        nav.classList.toggle("menu_visible");
        nav.classList.toggle("menu_lateral_fixed");
    });
}

const bsButton = new bootstrap.Button('#myButton');
