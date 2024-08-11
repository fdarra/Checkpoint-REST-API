const mongoose = require('mongoose');
const Schema=mongoose.Schema;

// Define schema
const UserSchema=new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {type:String,required:true} ,
    

},
{
    timestamps: true,
  });

//Define Model
 
module.exports=mongoose.model('User',UserSchema);
