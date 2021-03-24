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

const children = document.getElementsByClassName("child");//Imprime todo el array
console.log(children[2]);//Imprime el seleccionado

let element = document.querySelector("div#grandparent>.parent>div.child#child4");
console.log(element);

// let element = document.querySelector(".grandparent div");//selecciona el primer elemento que haga match
// console.log(element);

// let element = document.querySelector(".grandparent div");//selecciona todos los elementos que hacen match
// console.log(element);

parent1.style.backgroundColor = "#333";















/*Array.from(family).forEach(item => console.log (item));
 Contruyo un array desde HTML collection*/

// for (let familyMember of family) {
//     console.log(familyMember);
//}



