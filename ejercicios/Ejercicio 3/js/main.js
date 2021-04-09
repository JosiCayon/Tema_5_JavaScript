// ****************** EJERCICIO 3 ************//
function randomBetweenRange(start,end) {
    return Math.floor(Math.random() * (end-start) + start);
}

// Apartado 1 - Generación del Array

let employees = [];

for (let i = 1; i <= 100; i++) {
employees.push({ 
        position: `Empleado ${i}`,
        efficiency: Number(Math.random().toFixed(2)),
        salary: randomBetweenRange(1250,4000)

    });
}
console.log("1. Generación del array", employees);

// Apartado 1 - v2
function Employee(position, efficiency, salary) {
    this.position = position;
    this.efficiency = efficiency;
    this.salary = salary;
}

employees = [];
for (let i = 1; i <= 100; i++) {
    employees.push(new Employee (
        `Empleado ${i}`,
        Number(Math.random().toFixed(2)),
        randomBetweenRange(1250, 4000)
    ));
}
console.log("1. Generación del array v2", employees);

// Apartado 2
employees.sort(function(empleado1, empleado2) {
    return (empleado1.efficiency - empleado2.efficiency)

});
console.log("2. Ordenar por efficiency", employees);

// Apartado 3

employees.sort((empleado1, empleado2) => empleado1.salary - empleado2.salary);
console.log("3.Ordenar por salary", employees);

//Apartado 4
function sortByEmployeeNumber(empleado1, empleado2) {
    // return empleado2.position.slice(9) - empleado1.position.slice(9);// Alternativa mas corta pero mas rigida
    return empleado2.position.split(" ")[1] - empleado1.position.split(" ")[1];
    // return empleado2.position.replace("Empleado ", "") - empleado1.position.replace("Empleado ", "")// Alternativa
}

employees.sort(sortByEmployeeNumber);

console.log("4. Ordenar por número empleado", employees);

// Apartado 5
console.log("5. Filtrar salarys >2500");
employees
    .filter(employee => employee.salary > 2500)
    .forEach(employee => console.log(employee.position, employee.salary));

// Apartado 6
console.log("6. Usando MAP subir sueldos <1500");

employees = employees.map(employee => {
    if (employee.salary < 1500) {
        //Modificar el salary
        employee.salary = employee.salary * 1.25;
    }
    return employee;
});
console.log(employees);
// Apartado 7
console.log("7.Usando reduce: coste de sueldos");

const totalCost = employees.reduce((salarySum, employee) => salarySum += employee.salary * 1.15, 0);

console.log(totalCost);

// Apartado 8

console.log("8. Último apartado variado");
console.log("8.1 Despedir a rendimiento < 0.3");

employees = employees.filter(employee => employee.efficiency >= 0.3);
console.log("8.1: Despedir a los que NO salgan en esta lista", employees);

console.log("8.2 sueldo medio");
const averageSalary = employees.reduce((salarySum, employee) => salarySum + employee.salary, 0) / employees.lenght;

console.log("8.2 El sueldo medio de la empresa es: ", averageSalary);

console.log("8.3 Subir sueldo a 0.7");

employees.forEach(employee => {
    if(employee.efficiency > 0.7) {
        employee.salary = employee.salary * 1.25;
    }
});
console.log("Empleados tras la subida salarial a los de mejor rendimiento", employees);
