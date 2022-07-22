// Menu Responsivo

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
})


// Mostrar ítem adicionado ao carrinho

function alertItemAdded() {
    const itemAdded = document.querySelector('.botao-carrinho');
    alert('Item Adicionado ao Carrinho');
}