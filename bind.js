const normalPerson={
    firstName:'rahim',
    lastName:'uddin',
    salary:15000,
    getFullname: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;


    },
}

const heroPerson = {
    firstName:'Hero',
    lastName:'Balam',
    salary:25000
}



const friendlyPerson = {
    firstName:'Zero',
    lastName:'Golam',
    salary:35000
}

// if we want to create a chargeBill for hero person with bind to normal person
//normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

// if we want to create a chargeBill for friendly person with bind to normal person

const friendlyChargeBill=normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(5000);
friendlyChargeBill(4000);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);