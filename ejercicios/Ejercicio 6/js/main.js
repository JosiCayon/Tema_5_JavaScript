// Hacer una petición API de const URL = "https://jsonplaceholder.typicode.com/comments";
// Con el array que nos llegue, iremos rellenando nuesta ul con <li> uno para//
//con los primeros 20 elementos.
const URL = "https://jsonplaceholder.typicode.com/comments";

const userList = document.getElementById('userList');

function fillList(array) {
    userList.innerHTML ="";

    array.slice(0,20).forEach(element => {
        userList.innerHTML += `<li>${element.name}</li>`;        
        
    });
}

fetch(URL)
.then(response => {
    if(!response.ok) { 
        throw Error("Hay algun error con la respuesta: " +response.statusText);
    }
    return response.json();
    
})
.then(data => {
    fillList(data);

})
.catch(error => {
console.log(error);
});

// Apartado 2 

const apt2 = "https://jsonplaceholder.typicode.com/posts";

const div = document.getElementById("div");

function title(array) {
    array.slice(0, 20).forEach(element => {
        div.innerHTML += `<h2>${element.title}</h2><p>${element.body}</p>`;
    })
}

fetch(apt2)
.then(response => {
    if(!response.ok) { 
        throw Error("Hay algun error con la respuesta: " +response.statusText);
    }
    return response.json();
    
})
.then(data => {
    title(data);

})
.catch(error => {
console.log(error);
});
