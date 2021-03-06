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
const playerAPI = require('../models/player.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const playerRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

// GET ALL PLAYERS
playerRouter.get('/', function (req, res) {
  playerAPI.getAllPlayers().then(players => {
    res.render('players/allPlayers', { players })
  })
})

// CREATE NEW PLAYER
playerRouter.get('/new', function (req, res) {
  res.render('players/newPlayer')
})

// EDIT PLAYER
playerRouter.get('/:playerId/editPlayer', function (req, res) {
  playerAPI.getPlayer(req.params.playerId).then(player => {
    res.render('players/editPlayer', { player })
  })
})
// GET SINGLE PLAYER
playerRouter.get('/:playerId', function (req, res) {
  playerAPI.getPlayer(req.params.playerId)
  .then(player => {
    res.render('players/player', { player })
  })
  .catch(res.send)

})
// ADD NEW PLAYER
playerRouter.post('/', function (req, res) {
  playerAPI.addNewPlayer(req.body)
    .then(() => {
      res.redirect('/players');
    })
    .catch(res.send)

})
// UPDATE PLAYER
playerRouter.put('/:playerId', function (req, res) {
  const {playerId}= req.params
  playerAPI.updatePlayer(playerId, req.body)
    .then(() => {
      res.redirect('/players');
    })
    .catch((err) => res.send(err))
})
// DELETE PLAYER
playerRouter.delete('/:playerId', function (req, res) {
  playerAPI.deletePlayer(req.params.playerId).then(res.redirect('/players'))
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  playerRouter
}
