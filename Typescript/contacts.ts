
import { Person } from "./person";

export class Contacts {
    personas: Person[];

    constructor() {
        this.personas = [];
    }

    printCalendar(): void {
        this.personas.forEach(persona => {
            console.log(`Nombre: ${persona.name}, Edad: ${persona.age}, Dirección: ${persona.getAddress()}`);
        });
    }
}
