const URL = "https://jsonplaceholder.typicode.com/users";

// Version de clase
//     function printNames(array) {
//     array.forEach(user => console.log(user.name)) //obtener nombres
//     array.forEach(user => console.log(user.address.city)) //obtener ciudads
//     array.forEach(user => console.log(user.address.geo.lat)) //obtener latitud
// }



// fetch(URL)
//     .then(response => response.json())
//     .then(data => printNames(data));

    const printNames = array => array.forEach(user => console.log(user.name));
    const printCities = array => array.forEach(user => console.log(user.address.city));
    const printLats = array => array.forEach(user => console.log(user.address.geo.lat));
    
    fetch(URL)
    .then(response => {
        if(!response.ok) { // OJO que está !!! 
            throw Error("Hay algun error con la respuesta: " +response.statusText);
        }
        return response.json();
        
    })
    .then(data => {
    printNames(data);
    printCities(data);
    printLats(data);

}).catch(error => {
    console.log(error);
});

console.clear();
//Async - await - Alternativa a then

async function requestURL(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
}

requestURL(URL);

// -------------------- POST ***********************






