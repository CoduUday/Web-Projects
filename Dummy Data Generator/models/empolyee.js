const mongoose = require('mongoose');
const empolyeeSchema = new mongoose.Schema({
    name:String,
    salary:Number,
    language: String,
    city: String,
    isManager: Boolean
});
const Employee = mongoose.model('Empolyee', empolyeeSchema);
module.exports=Employee