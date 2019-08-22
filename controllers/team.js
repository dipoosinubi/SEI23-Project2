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
const teamAPI = require('../models/team.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const teamRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
teamRouter.get('/', function (req, res) {
  teamAPI.getAllTeams(). then(teams => {
    res.render('teams/allTeams', {teams})
  })
})
teamRouter.get('/new', function(req, res) {
  res.render('teams/newTeam')
})
teamRouter.get('/:teamId/editTeam', function(req, res) {
  teamAPI.getTeam(req.params.teamId).then(team => {
    res.render('teams/editTeam', {team})
  })
})
 
teamRouter.get('/:teamId', function(req, res) {
  teamAPI.getTeam(req.params.teamId).then (team =>{
    res.render('teams/team', {team})
  })
})

teamRouter.post('/', function(req, res){
  teamAPI.addNewTeam(req.body).then(() => {
    res.redirect('/teams');
  })
})

teamRouter.put('/:teamId', function (req, res){
  teamAPI.updateUser(req.params.teamId, req.body).then (
    () => {
      res.redirect('/teams');
  })
})

teamRouter.delete('/:teamId', function(req, res) {
  teamAPI.deleteUser(req.params.teamId).then(res.redirect('/teams'))
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  teamRouter
}
