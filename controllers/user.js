const express = require('express')

const teamsAPI = require('../models/team.js')
// const playerAPI = require('../models/player.js')
const usersAPI = require('../models/user.js')


const userRouter = express.Router()
//ZZZZZZZZZZZZZ USER CONTROLLER ZZZZZZZZZZZZ
// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
//GET ALL USERS
userRouter.get('/', function (req, res) {
    usersAPI.getAllUsers().then(users => {
        res.render('users/allUsers', {users} )
    })
})
// CREATE NEW USER
userRouter.get('/new', function(req, res) {
    res.render('users/newUser')
  })
  
  // EDIT SINGLE USER
  userRouter.get('/:userId/editUser', function(req, res) {
    usersAPI.getUser(req.params.userId).then(user => {
      res.render('users/editUser', {user})
    })
  })
   
  // GET SINGLE USER
  userRouter.get('/:userId', function(req, res) {
    usersAPI.getUser(req.params.userId).then (user =>{
      res.render('users/user', {user})
    })
  })
  //ADD NEW USER
  userRouter.post('/', function(req, res){
    usersAPI.addNewUser(req.body).then(() => {
      res.redirect('/users');
    })
  })
  // UPDATE USER
  userRouter.put('/:userId', function (req, res){
    usersAPI.updateUser(req.params.userId, req.body).then (
      () => {
        res.redirect('/users');
    })
  })
  // DELETE USER
  userRouter.delete('/:userId', function(req, res) {
    usersAPI.deleteUsers(req.params.userId).then(res.redirect('/users'))
  })

  // ZZZZZZZZZZZZZZZ TESAM CONTROLLER ZZZZZZZZZZZZZ
  // ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
  //  GET ALL TEAMS
userRouter.get('/:userId/teams', function (req, res) {
  teamsAPI.getAllTeams().then(teams => {
    res.render('teams/allTeams', {teams})
  })
})

// CREATE NEW TEAM
userRouter.get('/:userId/teams/new', function(req, res) {
  res.render('teams/newTeam')
})

// // EDIT SINGLE TEAM
// userRouter.get('/:teamId/editTeam', function(req, res) {
//   teamsAPI.getTeam(req.params.teamId).then(team => {
//     res.render('teams/editTeam', {team})
//   })
// })
 
// // GET SINGLE TEAM
// userRouter.get('/:teamId', function(req, res) {
//   teamsAPI.getTeam(req.params.teamId).then (team =>{
//     res.render('teams/team', {team})
//   })
// })
// //ADD NEW TEAM
// userRouter.post('/', function(req, res){
//   teamsAPI.addNewTeam(req.body).then(() => {
//     res.redirect('/teams');
//   })
// })
// // UPDATE TEAM
// userRouter.put('/:teamId', function (req, res){
//   teamsAPI.updateTeam(req.params.teamId, req.body).then (
//     () => {
//       res.redirect('/teams');
//   })
// })
// // DELETE TEAM
// userRouter.delete('/:teamId', function(req, res) {
//   teamsAPI.deleteTeam(req.params.teamId).then(res.redirect('/teams'))
// })


module.exports = {
    userRouter
  }