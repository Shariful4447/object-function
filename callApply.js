const normalPerson={
    firstName:'rahim',
    lastName:'uddin',
    salary:15000,
    getFullname: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount){
        this.salary = this.salary - amount;
        return this.salary;


    },
}
console.log(normalPerson.firstName);
normalPerson.chargeBill(500);
console.log(normalPerson.salary);


