
const Person = require('./person.js');

let persons = [
    new Person("Juan", "Rodriguez", 30, "Negro", "Azules", 1.75, 75, 1992, ["Fútbol", "Cocinar", "Pintar"]),
    new Person("María", "López", 25, "Castaño", "Verdes", 1.60, 55, 1997, ["Leer", "Correr", "Bailar"]),
    new Person("Carlos", "González", 35, "Rubio", "Marrones", 1.80, 85, 1987, ["Nadar", "Viajar", "Jugar videojuegos"])
];

let currentYear = new Date().getFullYear();

for (let person of persons) {
    let imc = person.calcularIMC();
    if (imc !== null) {
        console.log(`El IMC de ${person.nombre} es: ${imc}`);
    } 
    let age = person.calcularEdad(currentYear); 
    console.log(`${person.nombre} tiene ${age} años`);
}

for (let person of persons) {
    person.printAll();
}


for (let person of persons) {
    person.printHobbies();
}