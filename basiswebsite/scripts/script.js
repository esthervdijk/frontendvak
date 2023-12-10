// // JavaScript Document

// De menu opties zijn niet zichtbaar als je op de pagina komt //
document.querySelector('.menuKeuzes').style.display = 'none';

// Er wordt een variabele gekoppeld aan het hamburgermenu//
let menu = document.querySelector(".hamburgermenu");

//Functie om de menu keuzes te laten zien//
function menuOpen() {
    let menuKeuzes = document.querySelector('.menuKeuzes');
    
    if (menuKeuzes.style.display === 'none') {
        menuKeuzes.style.display = 'block';
        console.log("Menu is open");
    } else {
        menuDicht();
    }
}

// Functie aanroepen om menu te openen //
menu.addEventListener("click", menuOpen);

function menuDicht() {
    // document.querySelector('.menuKeuzes').style.display = 'none';
    document.querySelector('.menuKeuzes').classList.remove('open');
    console.log("Menu is dicht");
}

// Vorige iteraties code
// // De menu opties zijn niet zichtbaar als je op de pagina komt //
// document.querySelector('.menuKeuzes').style.display = 'none';

// // Er wordt een variabele gekoppeld aan het hamburgermenu//
// let menu = document.querySelector(".hamburgermenu");


// function menuOpenOfDicht (){
//     let menuKeuzes = document.querySelector(".menuKeuzes")

//     if (menuKeuzes.style.display == 'none') {
//         menuKeuzes.style.display = 'block';
//         console.log("Menu is open");
//     }
//     else {
//         menuDicht()
//     }
// }

// // Functie aanroepen om menu te openen //
// menu.addEventListener("click", menuOpen);


// function menuDicht (){
//     document.querySelector('.menuKeuzes').style.display = 'none';
//     console.log("Menu is dicht");
// }

// if (menuIsOpen = true).addEventListener("click", menuDicht);
// menuIsOpen.addEventListener("click", menuDicht);

// //Functie om de menu keuzes te laten zien//
// function menuOpen () {
//     document.querySelector('.menuKeuzes').style.display = 'block';
//     console.log("Menu is open")
//     // menu = menuIsOpen
// }