
export class Person {
    name: string;
    age: number;

    private address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    printName(): void {
        console.log(this.name);
    }

    yearOfBirth(currentYear: number): number {
        return currentYear - this.age;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    getAddress(): string {
        return this.address;
    }
}
