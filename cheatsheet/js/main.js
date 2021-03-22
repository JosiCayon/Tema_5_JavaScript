//-------------------- Uso de JS externo --------------//

function saludo() {
    alert("Hola desde un script externo");
    console.log("Has hecho click y aparezco a tu lado");
}
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo)

//-------------------- Depuración / Loggin --------------//
// alert("Mensaje");
console.log("");

//-------------------- Variables --------------//
//var -> function scope
//let / const -> block scope

function saludar() {
    console.log(`Inicial: ${i}`);

    // Comprobar con var y con let y ver diferencias
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log(`Final: ${i}`);
}

saludar();

console.clear();
// Inicialización
let day;
day = 5;

let monthName = "Abril";

let hour, minute, second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; //Avanzada
console.log(var1, var2, var3);

// const -> block scope
const x = 1;
// const y; Error: mising = in const
// x = 2; Error invalid assignment to const 'x'
console.clear();

//-------------------- Tipos de datos --------------//
// Datos primitivos
let str = String ("I'm a string");
let str2 = "I'm also a string"; // Recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof "5");

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; // Limpiar una variable
console.log(selectedColor, typeof selectedColor);

//Objects
array = Array(1, 2, 3);
array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-04-10"));
console.log(typeof new Error ("Mensaje de error"));

console.clear();
//-------------------- Strings --------------//
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("Cadena no presente"));
// Si da un dato -1 es porque no lo ha encontrado
console.log("La ultima ocurrencia de 'u' está en el índice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adiós mundo"));
console.log("Hola mundo" + ". Adiós mundo cruel!!"); // Equivale a concat
str = str + ". Adiós mundito";
str += ". Adiós mundito"; //son equivalentes el de arriba y el de abajo
console.log(str);

console.log(str.replace("mundo", "FUTURO"));
console.log(str.replaceAll("mundo", "FUTURO"));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
/*console.log(str.toLocaleUpperCase());
console.log(str.toLocaleUpperCase());*/

console.log(`El día de mi cumpleaños es ${day}`);

// Parsing, parseo, cambiarle el tipo a un dato
let number = Number("1000s"); // da el mensaje NaN Not a Number
console.log(number, typeof number);

number = Number("1000");
console.log(number, typeof number);

number += "1000"; //Entiende que es una concatenación, no una suma
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);// caso curioso de JS

console.clear();
//-------------------- Objetos --------------//
let person = { 
    name: "John",
    age: 30,
    blonde: false,
    walk: function () {
        console.log("Hey, estoy andando");
    },// Pre ES6
    jump() {
        console.log("Hey, estoy saltando");
    }// ES6

    // children: [James, Dorothy],
}
console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

// Acceso por corchetes / Brackets Notations
let propertyName = "age";
// person ["age"]
console.log(person[propertyName]);

// Ampliación de propiedades
person.children = ["James", "Dorothy"];
person.height = "177cm";

console.log(person);
console.log(person.children[1]); 

person.jump();
person.walk();

// This
const person2 = {
    name: "Thomas",
    age: 30,
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}
person2.talk();

const person3 = {
    name: "Tommy",
    age: 40,
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}
person3.talk();

console.clear();
//-------------------- Arrays --------------//
let selectedColors = ["red", "blue"]; //Array de Strings
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green"; // Añadimos elementos al array aunque no exista
console.log(selectedColors, selectedColors.length);

selectedColors[selectedColors.length] = "yellow";
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white"); // Se añade un ultimo elemento
console.log(selectedColors, selectedColors.length);

selectedColors.pop();// Con POP quita el último elemento
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("darkblue", "white","orange"); // meter elementos al principio del array
console.log(selectedColors, selectedColors.length);

selectedColors.shift();//Elimina el primer elemento
console.log(selectedColors, selectedColors.length);

selectedColors.sort();// Para ordenar arrays
console.log(selectedColors);

console.log(`El Rojo está en el índice`, selectedColors.indexOf("red"));//para buscar el indice de ese elemento

console.log(selectedColors[selectedColors.indexOf("red") + 1]);//ejercicio

console.log(selectedColors.slice(1, 3));  //Devuelve una seccion del array
console.log(selectedColors);

console.log("Los elementos borrados son", selectedColors.splice(1, 3));
console.log("el array se queda así", selectedColors);

console.clear();
/*
CREAR UN OBJETO NIÑO QUE TENGA DE PROPIEDADES, NOMBRE ALTURA 
GENERO Y AMIGOS AMIGOS ESTARA VACIO PARA AÑADIRLOS POSTERIORMENTE, 3 NIÑOS.
DESPUES AÑADIREMOS UNO EXTRA AL INICIO*/
let kid = {
    name: "marcus",
    height: 1.74,
    gender: "male",
    friends: ["Peter"],
    loseFriend() {
        this.friends.pop()
    }
}
kid.friends.push("Mary", "Stanis", "Thomas");

kid.friends.unshift("Tim");
console.log(kid);

kid.loseFriend();
console.log(kid);

/* *************** FIN DEL EJERCICIO******************* */
console.clear();

//-------------------- Condicionales --------------//
const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber === typeof guessedNumber) {
    console.log("Hey, tienes que decirme el mismo tipo");
}

if(randomNumber === guessedNumber) {
    console.log("has acertado el número");
} else if(randomNumber > guessedNumber) {
    console.log("El número secreto es mayor");
} else if ("randomNumber < guessedNumber") {
    console.log("El número secreto es menor");
} else {
    console.log(randomNumber != guessedNumber);
    console.log("Dime otro número");
}



