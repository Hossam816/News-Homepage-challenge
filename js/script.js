const listContainer = document.querySelector('.list-container');
const listContent = document.querySelector(".list-part");
const btnMenu = document.querySelector('.hamburger-menu');


btnMenu.addEventListener("click", addShowen);

function addShowen() {
    console.log("hellow");
    if (listContent.classList.contains = "showen") {
        listContent.classList.toggle("showen");
    }
}

console.log(btnMenu);