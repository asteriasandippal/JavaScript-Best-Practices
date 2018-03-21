// function personFactory(firstName, lastName) {
//     return {
//         firstName,
//         lastName,
//         grert: function(person) {
//             return "Hello, " + person.firstName;
//         }
//     };
// }

// const jhonDoe = personFactory("Jhon", "Doe");
// const jhanDoe = personFactory("Jhan", "Doe");


// console.log(jhonDoe);
// console.log(jhanDoe);

// 2ND STEPS
// let PersonProtoType = {
//     greet: function(person) {
//         return "Hello, " + person.firstName;
//     }
// };

// function personFactory(firstName, lastName) {
//     let person = Object.create(PersonProtoType, {
//         firstName: {
//             writable: false,
//             value: firstName
//         },
//         lastName: {
//             writable: false,
//             value: lastName
//         }
//     });

//     return person;
// }

// const jhonDoe = personFactory("Jhon", "Doe");
// const jhanDoe = personFactory("Jhan", "Doe");
// console.log(jhanDoe.greet(jhonDoe));

// 3RD STEPS

let personFactory = (function() {
    let PersonProtoType = {
        greet: function(person) {
            return "Hello, " + person.firstName;
        }
    };
    
    return function (firstName, lastName) {
        let person = Object.create(PersonProtoType, {
            firstName: {
                writable: false,
                value: firstName
            },
            lastName: {
                writable: false,
                value: lastName
            }
        });
    
        return person;
    };
})();


const jhonDoe = personFactory("Jhon", "Doe");
const jhanDoe = personFactory("Jhan", "Doe");
console.log(jhanDoe.greet(jhonDoe));