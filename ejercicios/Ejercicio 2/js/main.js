// Constructor
function User(name, firstLastName, secondLastName,email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = this.productsCount
    this.incrementProducts = function () {
        this.productsCount++;
    }
    this.emptyProducts = function () {
        this.productsCount = 0;
    }
}

// Data
const users = [
    new User ("Fran", "Gómez", "Fernandez", "fgomez@gmail.com", 35, "Málaga"),
    new User ("Lucia", "Prieto", "Pérez", "lupi@gmail.com", 28, "Navalcarnero"),
    new User ("Juan", "Cruz", "Raya", "jcruz@gmial.com", 42, "Madrid"),
];

// Selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

// Rellenar el select con diferentes opciones

users.forEach(user) => {
   let newOption = document.createElement("option");
   newOption.textContent = user.name;
   select.appendChild(newOption);
};