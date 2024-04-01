
import { Person } from "./person";

const person1 = new Person("Elmo", 30, "123 Sesame St");
person1.printName(); 
console.log(person1.yearOfBirth(2024)); 
console.log(person1.getAddress()); 
person1.setAddress("456 Chia St");
console.log(person1.getAddress()); 
