class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 2000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Balam', 2000);
console.log(friendlyPerson);

//using new keyword to create object from class