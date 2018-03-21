
const firstNameSymbol = Symbol("firstName");
const lastnameSymbol = Symbol("lastName");

console.log(firstNameSymbol);

class Person {
    constructor(firstName, lastName) {
        this[firstNameSymbol] = firstName;
        this[lastnameSymbol] = lastName;
    }

    static getting(person) {
        return "Hello, " + person[firstNameSymbol];
    }

    get fullName() {
        return this[firstNameSymbol] + " " + this[lastnameSymbol];
    }
}

let sandipPal = new Person("Sandip", "pal");
console.log(sandipPal.fullName);
console.log(Person.getting(sandipPal));