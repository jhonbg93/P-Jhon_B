const boton_menu = document.querySelector(".button_menu");
const header = document.querySelector(".header");
const container_navegation = document.querySelector(".container_navegation");

//AGREGANDO EVENTOS

boton_menu.addEventListener("click",function(){
    container_navegation.classList.toggle("active_button_menu");
    //propiedad toggle verifica si la propiedad existe o no exite si existe lo que hace es ocultar el elemento que esta visible desde el html

});