/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const usersAPI = require('../models/user.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const userRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
userRouter.get('/', function (req, res) {
  usersAPI.getAllUsers(). then(users => {
    res.render('users/allUsers', {users})
  })
})
userRouter.get('/new', function(req, res) {
  res.render('users/newUser')
})
userRouter.get('/:userId/editUser', function(req, res) {
  usersAPI.getUser(req.params.userId).then(user => {
    res.render('users/editUser', {user})
  })
})
 
userRouter.get('/:userId', function(req, res) {
  usersAPI.getUser(req.params.userId).then (user =>{
    res.render('users/user', {user})
  })
})

userRouter.post('/', function(req, res){
  usersAPI.addNewUser(req.body).then(() => {
    res.redirect('/users');
  })
})

userRouter.put('/:userId', function (req, res){
  usersAPI.updateUser(req.params.userId, req.body).then (
    () => {
      res.redirect('/users');
  })
})

userRouter.delete('/:userId', function(req, res) {
  usersAPI.deleteUser(req.params.userId).then(res.redirect('/users'))
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}
