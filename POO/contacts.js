
const Person = require('./Person.js');

class Contacts {
    constructor() {
        this.persons = [];
    }

    printPersons() {
        for (let person of this.persons) {
            console.log("Datos de la persona:");
            person.printAll();
        }
    }
}

module.exports = Contacts;
