
const Person = require('./Person');
const Contacts = require('./Contacts');

let contacts = new Contacts();

let person1 = new Person("Juan", "Rodriguez", 30, "Negro", "Azules", 1.75, 75, 1992, ["Fútbol", "Cocinar"]);
let person2 = new Person("María", "López", 25, "Castaño", "Verdes", 1.60, 55, 1997, ["Leer", "Correr"]);
let person3 = new Person("Carlos", "González", 35, "Rubio", "Marrones", 1.80, 85, 1987, ["Nadar", "Viajar"]);

contacts.persons.push(person1, person2, person3);

contacts.printPersons();
