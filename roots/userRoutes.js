//// require express
const express = require('express');


////// require userControllers
const { test, AddUser, GetAllUsers,EditUserById , DeleteUserById } = require('../controllers/userControlers');



///// require router

const router = express.Router();

///// create test router
router.get('/test',test) ;

///// Add User


router.post('/addUser',AddUser);

//// get all users
router.get('/GetUsers',GetAllUsers);


////  Update user by id

router.put('/editUser/:id', EditUserById)


router.delete('/editUser/:id', DeleteUserById)

//// export router
module.exports = router;


