// // JavaScript Document
// variabele gekoppelen aan het hamburgermenu//
let menu = document.querySelector(".hamburger-icon");

//functie om de menu keuzes te laten zien en te onzien (toggle)//
function menuOpen() {
    document.getElementById("menu").classList.toggle("open")
    document.querySelector("nav").classList.toggle("open")
    let menuKeuzes = document.querySelector('.menu-items');
}

// Functie aanroepen om menu te openen //
menu.addEventListener("click", menuOpen);