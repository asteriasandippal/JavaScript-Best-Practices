class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static getting (person) {
        return "Hello " + person.fullName;
    }
    get fullName() {
        return this.fullName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, position) {
        super(firstName, lastName);

        this.position = position;
    }

   
}

console.log(Employee);
