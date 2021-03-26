// Apartado 1
    //partimos de un div vacio
    // Con JS, añadir dos elementos p con un texto dentro.

const pElement = document.getElementsByTagName("div")[0];

let p1 = document.createElement("p");
let p2 = document.createElement("p");

p1.textContent = "lorem ipsum";
p2.textContent = "continuación";

// pElement.appendChild(p2); tambien vale para anexarlos
// pElement.appendChild(p1);

pElement.append(p1, p2);


console.log(pElement);

// Apartado 2
    //Al pulsar un botón, cambiar el color del 
    //fondo del cuerpo de HTML
const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function (event) {
    colorButton.style.backgroundColor = "red"
});

// Apartado 3
    //Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img.
    //Al hacer click en cada URL, cambiará la imagen a la que contenga dicha URL  
const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

