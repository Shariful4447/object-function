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


//with apply call

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log("available salary", heroPerson.salary);

