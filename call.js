const normalPerson={
    firstName:'rahim',
    lastName:'uddin',
    salary:15000,
    getFullname: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
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

//direct call function for accessing value

normalPerson.chargeBill.call(heroPerson, 1100, 100, 10);
normalPerson.chargeBill.call(heroPerson, 1300, 300, 30);
console.log("available salary for hero Person ",heroPerson.salary);
console.log("available salary for Normal Person",normalPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 500, 50, 10);
console.log("available salary for friendly Person",friendlyPerson.salary);
console.log("available salary for normal Person",normalPerson.salary);