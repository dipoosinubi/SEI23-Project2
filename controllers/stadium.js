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
const stadiumAPI = require('../models/stadium.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const stadiumRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//GET STADIUM BY TEAM
stadiumRouter.get('/team/:teamId/', function (req, res) {
  playerAPI.getStadiumsByTeamId(req.params.teamId).then(player => {
    res.render('stadiums/stadium')
  })
})

//GET ALL STADIUMS
stadiumRouter.get('/', function (req, res) {
  stadiumAPI.getAllStadiums().then(stadiums => {
    res.render('stadiums/allStadiums', { stadiums })
  })
})

//CREATE STADIUM WITH TEAM ID
stadiumRouter.get('/team/:teamId/new', function (req, res) {
  res.render('stadiums/newStadium')
})

// EDIT SINGLE STADIUM
stadiumRouter.get('/:stadiumId/editStadium', function (req, res) {
  stadiumAPI.getStadium(req.params.stadiumId).then(stadium => {
    res.render('stadiums/editStadium', { stadium })
  })
})
// GET SINGLE STADIUM
stadiumRouter.get('/:stadiumId', function (req, res) {
  stadiumAPI.getStadium(req.params.stadiumId).then(stadium => {
    res.render('stadiums/stadium', { stadium })
  })
})
// POST SINGLE STADIUM
stadiumRouter.post('/', function (req, res) {
  stadiumAPI.addNewStadium(req.body).then(() => {
    res.redirect('/stadiums');
  })
})
//UPDATE SINGLE STADIUM
stadiumRouter.put('/:stadiumId', function (req, res) {
  stadiumAPI.updateStadium(req.params.stadiumId, req.body).then(
    () => {
      res.redirect('/stadiums');
    })
})
// DELETE SINGLE STADIUM
stadiumRouter.delete('/:stadiumId', function (req, res) {
  stadiumAPI.deleteStadium(req.params.stadiumId).then(res.redirect('/stadiums'))
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  stadiumRouter
}
