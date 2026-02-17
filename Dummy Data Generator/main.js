
const names = ["Aarav Sharma","Riya Verma","Karan Mehta","Sneha Patil","Rahul Singh","Ananya Gupta","Vikram Joshi","Priya Nair","Aditya Rao","Neha Kulkarni"] 
const cities = ["Mumbai","Pune","Delhi","Bangalore","Hyderabad","Chennai","Jaipur","Kochi","Kolkata","Nagpur"]
const skills = ["JavaScript","Python","React","Node.js","MongoDB","HTML","CSS","C++","Java","SQL"];

async function randomnumber(){
    let randomnumber=Math.floor(Math.random()*11)
    return randomnumber
}
function randomBoolean() {
    return Math.random() < 0.5;
}






const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Employee = require('./models/empolyee');
 mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.render('index', {foo: 'FOO'});
})
app.get('/Generate',async (req, res) => {
  console.log("clicked")
for (let index = 0; index < 10; index++) {
  let number=randomnumber()
  let e= await Employee.create({ name: `${names[number]}`,
    salary: Math.floor(Math.random()*500000 ),
    language: `${skills[number]}`,
    city: `${cities[number]}`,
    isManager: randomBoolean()})
   await e.save()
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



