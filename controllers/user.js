const express = require('express')

const teamsAPI = require('../models/team.js')
const playerAPI = require('../models/player.js')
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
    usersAPI.deleteUser  (req.params.userId).then(res.redirect('/users'))
  })

  // ZZZZZZZZZZZZZZZ TEAMS CONTROLLER ZZZZZZZZZZZZZ
  // ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
  //  GET ALL TEAMS
userRouter.get('/:userId/teams', function (req, res) {
  usersAPI.getUser(req.params.userId).then(user => 
  // teamsAPI.getTeamsByUserId(user._id).then(teams => {
    teamsAPI.getAllTeams().then (teams => {
    res.render('teams/allTeams', {teams, user})
  }))
})

// CREATE NEW TEAM
userRouter.get('/:userId/newTeam', function(req, res) {
  res.render('teams/newTeam')
})

// EDIT SINGLE TEAM
userRouter.get('/:teamId/editTeam', function(req, res) {
  teamsAPI.getTeam(req.params.teamId).then(team => {
    res.render('teams/editTeam', {team})
  })
})
 
// GET SINGLE TEAM
userRouter.get('/:teamId', function(req, res) {
  teamsAPI.getTeam(req.params.teamId).then (team =>{
    res.render('teams/team', {team})
  })
})
//ADD NEW TEAM
userRouter.post('/teams', function(req, res){
  teamsAPI.addNewTeam(req.body).then(() => {
    res.redirect('/users/:userId');
  })
})
// UPDATE TEAM
userRouter.put('/:teamId', function (req, res){
  teamsAPI.updateTeam(req.params.teamId, req.body).then (
    () => {
      res.redirect('/teams');
  })
})
// DELETE TEAM
userRouter.delete('/:teamId', function(req, res) {
  teamsAPI.deleteTeam(req.params.teamId).then(res.redirect('/teams'))
})
// ZZZZZZZZZZZZZZ PLAYER CONTROLLER ZZZZZZZZZZZZZZZZZZ
// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

// GET PLAYERS BY TEAM
// playerRouter.get('/team/:teamId/', function (req, res) {
//   playerAPI.getPlayersByTeamId(req.params.teamId).then(player => {
//     res.render('players/player', { player})
//   })  
// })
// // GET ALL PLAYERS
// playerRouter.get('/', function (req, res) {
//   playerAPI.getAllPlayers().then(players => {
//     res.render('players/allPlayers', { players })
//   })
// })
// // CREATE PLAYER WITH TEAM ID
// playerRouter.get('/team/:teamId/new', function (req, res) {
//   res.render('players/newPlayer')
// })
// // EDIT SINGLE PLAYER
// playerRouter.get('/:playerId/editPlayer', function (req, res) {
//   playerAPI.getPlayer(req.params.playerId).then(player => {
//     res.render('players/editPlayer', { player })
//   })
// })
// // GET SINGLE PLAYER
// playerRouter.get('/:playerId', function (req, res) {
//   playerAPI.getPlayer(req.params.playerId)
//     .then(player => {
//       res.render('players/player', { player })
//     })
//     .catch(res.send)

// })
// // POST SINGLE PLAYER
// playerRouter.post('/', function (req, res) {
//   playerAPI.addNewPlayer(req.body)
//     .then(() => {
//       res.redirect('/players');
//     })
//     .catch(res.send)

// })
// // UPDATE SINGLE PLAYER
// playerRouter.put('/:playerId', function (req, res) {
//   playerAPI.updatePlayer(req.params.playerId, req.body)
//     .then(() => {
//       res.redirect('/players');
//     })
// })
// //DELETE SINGLE PLAYER
// playerRouter.delete('/:playerId', function (req, res) {
//   playerAPI.deletePlayer(req.params.playerId).then(res.redirect('/players'))
// })
module.exports = {
    userRouter
  }