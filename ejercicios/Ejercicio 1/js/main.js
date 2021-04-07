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
const image = document.querySelectorAll("img")[0];

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

// v2 - Autoría Juan Albertos
// const list = document.querySelector("ul");
// const image = document.querySelector("img");

// const changeImage = e => image.src = e.target.textContent;

// list.addEventListener("click", changeImage);

// Apartado 4

const ap4Paragraph = document.getElementById('fillableParagraph');
const ap4Input = document.querySelector ("input");
const ap4Button = document.querySelectorAll("button")[1];

ap4Button.addEventListener("click", () => {
    ap4Paragraph.textContent = ap4Input.value;
    ap4Input.value = "";
});
    // Apartado 4.2
    const ap42Paragraph = document.getElementById('fillableParagraph2');
    const ap42Input = document.querySelectorAll("input")[1];
    
    ap42Input.addEventListener("input", () =>{ 
        ap42Paragraph.textContent = ap42Input.value;
    });

// Apartado 5
const textarea = document.querySelector("#textAreaToValidate");
textarea.addEventListener("input", e => {
    // if (e.target.value.length > 15) {
    //     e.target.style.color = "red";
    // } else {
    //     e.target.style.color  = "green";
    // } con if/else y mejor con valor ternario, debajo
    e.target.style.color = e.target.value.length > 15 ? "red" : "green"
});

// Apartado 6
const evenInput = document.querySelector("#evenNumberInput");
evenInput.nextElementSibling.addEventListener("click", () => {
    if (evenInput.value % 2 === 0) {
        evenInput.style.border = " 2px dashed red";
    } else {
        evenInput.style.border = "";

    }
});

// Apartado 7
const ul = document.getElementById("listToFill");

for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}`;
    ul.appendChild(newLi);
}

// Apartado 8
const newTabButton = document.querySelector("#newTab");
const link = document.querySelector("a");
newTabButton.addEventListener("click", () =>link.target = "_blank");

// Apartado 9
const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change", e => {
    ap9Paragraph.style.color = e.target.value;
});

// Apartado 10
const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");

document.getElementById("randomButton").onclick = () => {
    const randomNumber = Math.floor( Math.random() * 100); //alternativa: ParseInt (Math.Random()*100)
    currentRandom.textContent = randomNumber;

    totalNumbers.textContent++; //alternativa: = Number(totalNumbers.textContent) + 1;
    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;
};

// Apartado 11



// Apartado 12
document.querySelector("#toggler").onclick = (e) => e.target.classList.toggle("btn");// Devuelve HTMLCollection

/* Refactorizar */
let buttons = document.getElementsByClassName('btn-red');

// buttons[0].addEventListener('click', () => {
//     buttons[0].style.backgroundColor = "red";
// });

// buttons[1].addEventListener('click', () => {
//     buttons[1].style.backgroundColor = "red";
// });

// buttons[2].addEventListener('click', () => {
//     buttons[2].style.backgroundColor = "red";
// });

// Solucion 1
Array.from(buttons).forEach(button => button.onclick = e => e.target.style.backgroundColor = "red");

// Solución 2
buttons = document.querySelectorAll('btn-red'); // devuelve NodeList que tiene disponivle forEach
buttons.forEach(button => {

    button.addEventListener("click", function (e) {
        e.target.style.backgroundColor = "red";
    });
});