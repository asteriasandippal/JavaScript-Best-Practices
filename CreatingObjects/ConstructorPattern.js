function Person(firstName, LastName) {
    this.firstName = firstName;
    this.LastName = LastName;
}

Person.prototype.getting = function(person) {
    return "Hello, " + person.fullName;
 };

Object.defineProperty(Person.prototype, "fullName", {
    get: function() {
        return this.firstName + " " + this.LastName;
    }
})

let sandipPal = new Person("Sandip", "pal");
let rayelPal = new Person("Rayel", "Pal");

console.log(sandipPal);
console.log(sandipPal.fullName);
console.log(sandipPal.getting(rayelPal));

