// Constructor
function User(name, firstLastName, secondLastName,email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
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

users.forEach(user => {
   let newOption = document.createElement("option");
   newOption.textContent = user.name;
   select.appendChild(newOption);
});

// Rellenar la lista de un usuario cualquiera
function fillList(user) {

    list.innerHTML = "";

    for ( const key in user) { // for...in itera con las propiedades
        const value = user[key];

        if (typeof value !== "function") {
        //     // console.log(`key: ${key}, value: ${value}`);
        //     const newListItem = document.createElement("li");
        //     newListItem.innerHTML = `<b>${key}:</b> ${value}`;
        //     // en vez de textContent cambiamos a inner para poder hardcodear la nagrita
        //     newListItem.classList.add("list-group-item");
        //     list.appendChild(newListItem);
        // }
        list.innerHTML += `<li class= "list-group-item"><b>${key}:</b> ${value}</li>`
        }
    }
}

// Estado Inicial

fillList(users[0]); // se hacer para que inicialmente salga la tabla

function processProducts(e) {
    const selectedUser = users.find(user => user.name === select.value);
    if (e.target.id === "incrementButton") {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    }
    fillList(selectedUser);
}

// Añadir listeners necesarios
select.addEventListener("change", e => {
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser);
});
incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);



