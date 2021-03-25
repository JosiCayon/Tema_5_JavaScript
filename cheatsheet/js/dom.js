console.clear();
// ------------------ DOM (Document Object Model) ------------//
// Basics

console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title += " (DOM)"
console.log(document.title);
console.log(document.lastModified);

// Selectors
const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent");// HTMLCollection
const parent1 = parents [0];
const parent2 = parents [1];

console.log(parent1, parent2);

const hijos = document.getElementsByClassName("child");//Imprime todo el array
console.log(hijos[2]);//Imprime el seleccionado

let element = document.querySelector("div#grandparent>.parent>div.child#child4");
console.log(element);

parent1.getElementsByClassName.backgroundColor = "grey";

let children = document.querySelectorAll('.child');
for (let item of children) {
    item.style.backgroundColor = 'green';
}

const changeBackground = (element, color) => element.style.backgroundColor = color;
changeBackground(children[0], 'red');
changeBackground(parent2, 'cyan');
changeBackground(parent2.children[1], 'whitesmoke');

/* hijos[0].parentNode.style.backgroundColor = 'pink'; */ //.parentNode salta al padre
parent2.children[1]; //.children[i] selecciona al hijo[indice]
parent1.children[1].previousElementSibling  /* .previousElementSibling selecciona al hermano anterior, 
también está .nextElementSibling que selecciona al siguiente hermano.*/
grandParent.children[1].previousElementSibling.lastElementChild /* .lastElementChild selecciona al último hijo, 
también está .firstElementChild que selecciona al primer hijo.*/



// let element = document.querySelector(".grandparent div");//selecciona el primer elemento que haga match
// console.log(element);

// let element = document.querySelector(".grandparent div");//selecciona todos los elementos que hacen match
// console.log(element);

// parent1.style.backgroundColor = "#333";



// Properties
// children[0].innerHTML = "Child 1 v2";
console.log(children[0].innerHTML);// Imprime etiquetas
console.log(children[0].textContent);// Ignora etiquetas HTML
children[0].textContent += "v2";

console.clear();
//parent1.classList.remove("bg-dark"); //para eliminar las clases
parent1.classList.add("bg-red");// para añadir 
console.log("ClassList: ", parent1.classList);

// toggle alterna entre valor y valor, 
//si no tiene la clase la añade y si la tiene la quita
// parent1.classList.toggle();

// setAttribute te incluye la clase y el nombre si no existe
parent1.setAttribute("name", "nombre-del-parent-1");

console.clear();
// Create / Remove elements
let myDiv = document.createElement("div");
myDiv.id = "new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;
parent1.appendChild(myDiv2); 
parent1.appendChild(myDiv); // MISMO nodo con dos nombres diferentes

myDiv2 = myDiv.cloneNode(true); // Creamos un nuevo nodo a partir del original
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5";

myDiv.remove(); // Elimina el elemento

myDiv3 = myDiv.cloneNode(true);
parent2.before(myDiv3);

parent2.after(myDiv.cloneNode(true));

// Crear una función que me devuelva un nodo nuevo que reciba etiqueta e ID

function newNode(label, id) {
    let nodo = document.createElement(label);
    nodo.id = id;
    return nodo;
}

let newDiv = newNode ('div', 'identificador1');
let table = newNode('table', 'identificador2');

parent2.appendChild(newDiv);
parent2.appendChild(table);















/*Array.from(family).forEach(item => console.log (item));
 Contruyo un array desde HTML collection*/

// for (let familyMember of family) {
//     console.log(familyMember);
//}



