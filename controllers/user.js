const express = require('express')

const userAPI = require('../models/team.js')
const playerAPI = require('../models/player.js')
const userAPI = require('../models/user.js')


const userRouter = express.Router()

//GET ALL USERS
userRouter.get('/', function (req, res) {
    userAPI.getAllUsers().then(user => {
        res.render('users/allUsers')
    })
})
// CREATE NEW USER
userRouter.get('/new', function(req, res) {
    res.render('users/newUser')
  })
  
  // EDIT SINGLE USER
  userRouter.get('/:userId/editUser', function(req, res) {
    userAPI.getUser(req.params.userId).then(user => {
      res.render('users/editUser', {user})
    })
  })
   
  // GET SINGLE USER
  userRouter.get('/:userId', function(req, res) {
    userAPI.getUser(req.params.userId).then (user =>{
      res.render('users/user', {user})
    })
  })
  //ADD NEW USER
  userRouter.post('/', function(req, res){
    userAPI.addNewUser(req.body).then(() => {
      res.redirect('/users');
    })
  })
  // UPDATE USER
  userRouter.put('/:userId', function (req, res){
    userAPI.updateUser(req.params.userId, req.body).then (
      () => {
        res.redirect('/users');
    })
  })
  // DELETE USER
  userRouter.delete('/:userId', function(req, res) {
    userAPI.deleteUsers(req.params.userId).then(res.redirect('/users'))
  })

module.exports = {
    userRouter
  }