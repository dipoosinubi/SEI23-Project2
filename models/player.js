const mongoose = require('./connection.js')

const PlayerSchema = mongoose.Schema({
  name: String,
  jersey: Number,
  origin: String,
  age: Number,
});

const PlayerCollection = mongoose.model('player', PlayerSchema);

function getAllPlayers() {
  return PlayerCollection.find();
}

function getPlayer(playerId) {
  return PlayerCollection.findById(playerId)
}

function addNewPlayer(newPlayer) {
  return PlayerCollection.create(newPlayer)
}
function updatePlayer(playerId, updatedPlayer) {
  return PlayerCollection.updateOne({ _id: playerId }, updatedPlayer)
}
function deletePlayer(playerId) {
  return PlayerCollection.findByIdAndDelete(playerId);
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewPlayer,
  deletePlayer,
  getAllPlayers,
  getPlayer,
  updatePlayer

}
