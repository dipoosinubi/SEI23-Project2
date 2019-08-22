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
const sportAPI = require('../models/sport.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const sportRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
sportRouter.get('/', function (req, res) {
  sportAPI.getAllSports(). then(sports => {
    res.render('sports/allSports', {sports})
  })
})
sportRouter.get('/new', function(req, res) {
  res.render('sports/newSport')
})
sportRouter.get('/:sportId/editSport', function(req, res) {
  sportAPI.getSport(req.params.sportId).then(sport => {
    res.render('sports/editSport', {sport})
  })
})
 
sportRouter.get('/:sportId', function(req, res) {
  sportAPI.getSport(req.params.sportId).then (sport =>{
    res.render('sports/sport', {sport})
  })
})

sportRouter.post('/', function(req, res){
  sportAPI.addNewSport(req.body).then(() => {
    res.redirect('/sports');
  })
})

sportRouter.put('/:sportId', function (req, res){
  sportAPI.updateSport(req.params.sportId, req.body).then (
    () => {
      res.redirect('/sports');
  })
})

sportRouter.delete('/:sportId', function(req, res) {
  sportAPI.deleteSport(req.params.sportId).then(res.redirect('/sports'))
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  sportRouter
}
