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
const teamsAPI = require('../models/team.js')

//  

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

//  GET ALL TEAMS
teamRouter.get('/', function (req, res) {
  teamsAPI.getAllTeams(). then(teams => {
    res.render('teams/allTeams', {teams})
  })
})

// CREATE NEW TEAM
teamRouter.get('/new', function(req, res) {
  res.render('teams/newTeam')
})

// EDIT SINGLE TEAM
teamRouter.get('/:teamId/editTeam', function(req, res) {
  teamsAPI.getTeam(req.params.teamId).then(team => {
    res.render('teams/editTeam', {team})
  })
})
 
// GET SINGLE TEAM
teamRouter.get('/:teamId', function(req, res) {
  teamsAPI.getTeam(req.params.teamId).then (team =>{
    res.render('teams/team', {team})
  })
})
//ADD NEW TEAM
teamRouter.post('/', function(req, res){
  teamsAPI.addNewTeam(req.body).then(() => {
    res.redirect('/teams');
  })
})
// UPDATE TEAM
teamRouter.put('/:teamId', function (req, res){
  teamsAPI.updateTeam(req.params.teamId, req.body).then (
    () => {
      res.redirect('/teams');
  })
})
// DELETE TEAM
teamRouter.delete('/:teamId', function(req, res) {
  teamsAPI.deleteTeam(req.params.teamId).then(res.redirect('/teams'))
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  teamRouter
}
