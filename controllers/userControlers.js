const User = require("../models/user");

exports.test = async (req,res) => {
    try {
        res.status(200).send('Test ok')
    } catch (error) {
        res.status(400).send(error);
        console.log(error)
    }
}



//////*********************  POST :  ADD A NEW USER TO THE DATABASE ******************* */
exports.AddUser = async(req,res) => {
try { const {name,email,password} = req.body;
const user = new User({name, email, password})
    await user.save()
    res.status(200).send({msg: "User added successfully", user})
} catch (error) {
    res.status(400).send(error)
}
}

/////**********    GET :  RETURN ALL USERS **********   //
exports.GetAllUsers = async(resq,res)=>{
    try{
        const users= await User.find();
        res.status(200).send(users);

    }catch(error) {
        res.status(400).send(error);
     
}
}




//////*******************************   DELETE : REMOVE A USER BY ID  ************ */

exports.EditUserById = async (req, res) => {
    const id = req.params.id;        // Extract the user ID from the URL parameters
    const update = req.body;         // Extract the updated data from the request body
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,                          // The ID of the user to update
        update,                      // The updated data
        { new: true, runValidators: true }  // Option to return the updated document and validate
      );
  
      if (updatedUser) {
        return res.status(200).json({ message: 'User updated successfully', user: updatedUser });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  };



  exports.DeleteUserById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (deletedUser) {
        return res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  };

