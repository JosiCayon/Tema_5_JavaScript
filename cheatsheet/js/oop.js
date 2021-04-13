console.clear();

// Antes de ES6
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old.`);
    }
}

let myCar = new Car ("Ford", "Fairlane", 1968);
let myCar2 = new Car ("Audi", "Q7", 2015);

console.log(myCar, myCar2);

Car.getHP = function () { // No actualiza las instancias
console.log("This car has 300 HorsePower");
}

myCar.getHP = function () { // Solo modifica la instancia myCar
    console.log("This car has 300 horsepower");
}

Car.prototype.getHP = function () { 
    console.log("This car has 400 horsepower");
}

myCar.getHP();
myCar2.getHP();

function Suv(brand, model, year, width, height) {
    Car.call(this, brand, model, year)
    this.width = width;
    this.height = height;
}

Suv.prototype = Object(Car.prototype);

let mySuv = new Suv("Audi", "Q3", 2007, 2000, 3000);
mySuv.getAge();

console.clear();
// -------------------------- ES6 --------------------
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }

    getType () {
        console.log("I'm a common book");
    }
}

const book1 = new Book ("Metamorphosis", "Kafka", 1915);
console.log(book1);
book1.getType();
book1.getSummary();

// Subclases (Herencia)
class Magazine extends Book{

constructor(title, author, year, month){
    super(title, author, year);
    this.month = month;
}

    getType() {
        super.getType();
        console.log("I'm a magazine");
    }
}

// Instanciamos una revista
const mag1 = new Magazine ("SuperPop", "Algun loco", 2015);
mag1.getSummary();

mag1.getType();
book1.getType();

// Otro ejemplo
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.type} named ${this.name} goes ${this.sound}`);
    }
}

class Cat extends Animal {
    constructor(name){
        super("cat", name, "miau");
    }
}

class Dog extends Animal {
    constructor(name){
        super("dog", name, "woof");
    }
}

const conBotas = new Cat ("con Botaas");
const dylan = new Dog ("dylan");
const danko = new Dog ("danko");

conBotas.makeSound();
dylan.makeSound();
danko.makeSound();


