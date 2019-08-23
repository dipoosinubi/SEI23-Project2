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
stadiumRouter.get('/', function (req, res) {
  stadiumAPI.getAllStadiums(). then(stadiums => {
    res.render('stadiums/allStadiums', {stadiums})
  })
})
stadiumRouter.get('/new', function(req, res) {
  res.render('stadiums/newStadium')
})
stadiumRouter.get('/:stadiumId/editStadium', function(req, res) {
  stadiumAPI.getStadium(req.params.stadiumId).then(stadium => {
    res.render('stadiums/editStadium', {stadium})
  })
})
 
stadiumRouter.get('/:stadiumId', function(req, res) {
  stadiumAPI.getStadium(req.params.stadiumId).then (stadium =>{
    res.render('stadiums/stadium', {stadium})
  })
})

stadiumRouter.post('/', function(req, res){
  stadiumAPI.addNewStadium(req.body).then(() => {
    res.redirect('/stadiums');
  })
})

stadiumRouter.put('/:stadiumId', function (req, res){
  stadiumAPI.updateStadium(req.params.stadiumId, req.body).then (
    () => {
      res.redirect('/stadiums');
  })
})

stadiumRouter.delete('/:stadiumId', function(req, res) {
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
