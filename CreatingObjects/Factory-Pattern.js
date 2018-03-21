// const jhonDoe = {
//     firstName: "Jhon",
//     lastName: 'Doe'
// };

// const jhanDoe = {
//     firstName: "Jhan",
//     lastName: 'Doe'
// };

function personFactory(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        },
        greet: function(person) {
            return "Hello, " + person.fullName;
        }
    }
};

function employeeFactory(firstName, lastName, position) {
    let employee = personFactory(firstName, lastName);

    employee.position = position;

    let greet = employee.greet;

    employee.greet = function(person) {
        return greet(person) + ". How may I help you?";
    }

    return employee;
}

const jhonDoe = personFactory("Jhon", "Doe");
const jhanDoe = personFactory("Jhan", "Doe");

const jasonSmith = employeeFactory("Jason", "Smith", "Ui Developer");
console.log(jasonSmith);
console.log(jasonSmith.greet(jhonDoe));
