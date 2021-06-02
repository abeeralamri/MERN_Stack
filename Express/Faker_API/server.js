const express = require("express");
const { fake } = require("faker");
const faker = require('faker');

const app = express();
const port = 8000;

class User{
    constructor(){
        this._id = faker.datatype.uuid();   
        this.firstName = faker.name.firstName();    
        this.lastName = faker.name.lastName(); 
        this.phoneNumber = faker.phone.phoneNumber();  
        this.email = faker.internet.email(); 
        this.password = faker.internet.password();      
     
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();   
        this.name = faker.company.companyName();    
        this.streetName = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode= faker.address.zipCode();
        this.country = faker.address.country();
    
    }
}
const new_user =  new User(); // new user
app.get("/api/users/new", (req, res) => {
    res.json(new_user);
});


const new_company =  new Company(); // new company
app.get("/api/companies/new", (req, res) => {
    res.json(new Company);
});

app.listen(port, () => console.log(`Listening on port ${port}`));