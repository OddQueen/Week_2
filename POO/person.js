class Person {
    constructor(nombre, apellido, edad, colorPelo, colorOjos, altura, peso, yearOfBirth, hobbies) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.colorPelo = colorPelo;
        this.colorOjos = colorOjos;
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;

    }

    calcularIMC() {
        if (this.altura && this.peso) {
            let imc = this.peso / (this.altura ** 2);
            return imc.toFixed(1);
        } else {
            return null;
        }
    }

    calcularEdad(currentYear) {
        if (this.yearOfBirth && currentYear) {
            return currentYear - this.yearOfBirth;
        } else {
            return null;
        }
    }

    printAll() {
        for (let atributo in this) {
            console.log(`${atributo} - ${this[atributo]}`);
        }
    }

    printHobbies() {
        for (let hobby of this.hobbies) {
        }
    }
}

module.exports =   Person