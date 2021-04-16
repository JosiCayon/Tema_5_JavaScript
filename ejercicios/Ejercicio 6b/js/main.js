//6b Post - Paginación del lado del cliente
//Constantes
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

 // Variables
 let posts = [];
 let currentPage = 1;

//Selectores
const postDiv =document.querySelector("#posts")
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

 

//Utilidades
function fillDiv(array){
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage);
    postDiv.innerHTML="";
    newPagePosts.forEach(post =>postDiv.innerHTML +=`<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`)
}

 

function changePage(event){
    if(event.target.className === "previousPage" && currentPage > 1) {
        currentPage--;
    } else if (event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE) {
        currentPage++;
    }
    fillDiv();
}

 

//https://stackoverflow.com/questions/42761068/paginate-javascript-array
function paginate(array, page_size, page_number) {

 

    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  
 

 


fetch(POST_URL).then(responde => responde.json())
.then(data => {
    posts = [...data];
    fillDiv();
});

// 6b
// Apartado 2 Login y Paginación desde el servidor
//Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

//Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
document.querySelector("#loginButton").addEventListener("click", login);
usersList = document.querySelector("#usersList");

function login(event) {
    event.preventDefault ();

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value

    };

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => data.error ? alert(data.error) : fetchAllUsers())
}

function fetchAllUsers(params) {
    fetch(USERS_URL)
    .then(response => response.json())
    .then (data => console.log(data))
}

async function fetchAllUsers(params) {
    // fetch(USERS_URL)
    // .then(response => response.json())
    // .then (data => console.log(data))

    let response = await fetch(USERS_URL);
    let data = await response.json();

    let users = [];
    for (let page = 1; page <= data.total.pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.contact(newData.data)
    }

    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
}

// Alternativa para recuperar todas las paginas de una API utilizando .then()
let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        users = users.concat(newData.data);

        if(newData.page < newData.total_pages) {
            fetchAllUsersV2(`${USERS_URL}?pages=${newData.page+1}`)
        } else {
            userList
        }
    });
}

