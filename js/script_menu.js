const boton_menu = document.querySelector(".button_menu");
const header = document.querySelector(".header");
const container_navegation = document.querySelector(".container_navegation");
const body = document.body;


let posActual = 0;
let status_button = true;

//AGREGANDO EVENTOS

boton_menu.addEventListener("click",function(){
    container_navegation.classList.toggle("active_button_menu");
    //propiedad toggle verifica si la propiedad existe o no exite si existe lo que hace es ocultar el elemento que esta visible desde el html
    if(status_button){
        body.setAttribute("style", "overflow: hidden");
        status_button = false;
    }else{
        body.removeAttribute("style", "overflow: hidden");
        status_button = true;
    }
});

//con esta funcion vamos darle interactividad a la barra de menu para que se oculte cada vez que utilicemos el scroll

window.addEventListener("scroll",function(){
    console.log(this.window.scrollY);
    if(this.window.scrollY > posActual){
        header.classList.remove("active_header");
        header.classList.add("desactive_header");
        //console.log("bajando") de esta manera comprobamos que esta funcionando la funcion correctamente
        //bajando
    } else {
        header.classList.remove("desactive_header");
        header.classList.add("active_header");
        //console.log("subiendo") de esta manera comprobamos que esta funcionando la funcion correctamente
        //subiendo
    }

    posActual = this.window.scrollY //posActual me guarda la ultima posicion del scroll en y 
})