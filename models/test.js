const teamsAPI = require('../models/team.js')
const stadiumAPI = require('../models/stadium.js')
const playerAPI = require('../models/player.js')

teamsAPI.addNewTeam().then((newTeam) => {
    console.log (newTeam)
})
//  stadiumAPI.addNewStadium(newTeam._id).then((newStadium) => {
//      console.log(newStadium)
//  })