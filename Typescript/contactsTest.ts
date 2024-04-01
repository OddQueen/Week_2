
import { Contacts } from "./contacts";
import { Person } from "./person";

const contacts = new Contacts();

let person1 = new Person("Alicia", 25, "123 Calle Mayor");
let person2 = new Person("Roberto", 30, "456 Calle Velazquez");
let person3 = new Person("Carlos", 40, "789 Calle Roble");
contacts.personas.push(person1, person2, person3);

contacts.printCalendar();
