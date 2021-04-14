// Crear el constructor
function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

// Data initialization
let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),

];

let displayedBooks = books; // esto es del ejer5


// Selectors
const booksTbody = document.getElementById("books-body");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

const tfoot = document.querySelector("tfoot")



 function updateTable() {
    // Vaciamos el tBody por completo
    booksTbody.innerHTML = ""; // Para inicializar la tabla y limpiarla
    
    // Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
                <button class= "btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`;
    });

    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.price, 0);
    tfoot.textContent = `Precio Total: ${totalPrice}`;
}

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }
};

updateTable();

// Process form and add a new Book
addBookButton.addEventListener("click", e => {
    e.preventDefault();//evita q el formulario recargue la pagina

    const newID = books[books.length-1].id + 1; 

    books.push(new Book(
        newID,
        titleInput.value,
        authorInput.value,
        salesInput.value,
        priceInput.value)
    );

     updateTable();

        titleInput.value = "";
        authorInput.value = "";
        salesInput.value = "";
        priceInput.value = "";
        
});

// Del Ejercicio 5


const filterInput = document.querySelector("#filterInput"); // esto iria donde los selectores
const priceHeader = document.querySelector("#priceHeader");

let ascendingOrder = true;

filterInput.addEventListener("input", e => {
    // Version 1 teniendo en cuenta las mayúsculas (case sensitive)
    displayedBooks = books.filter(book => {
        return book.title.includes(e.target.value) || book.author.includes(e.target.value)
    });// Se podría filtar tb por autor, pero sensitivo a mayúsculas
    
    // Versión 2 - Sin tener en cuenta las mayúsculas
    displayedBooks = books.filter(book=> {
        return book.title.toUpperCase().includes(e.target.value.toUpperCase());
    })
    
    updateTable();

});

// Apartado 2
priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;

    

    displayedBooks.sort((book1, book2) => {
        return ascendingOrder 
            ? book1.price - book2.price 
            : book2.price - book1.price;
    });

    updateTable();
});

// Apartado 3
