const mongoose = require('./connection.js')

const TeamSchema = mongoose.Schema ({
  name: String,
  leauge: String,
  country: String,
});

const TeamCollection = mongoose.model('team', TeamSchema);

function getAllTeams(){
  return TeamCollection.find();
}

function getTeam(teamId){
  return TeamCollection.findById(teamId)
}

function addNewTeam(newTeam) {
  return TeamCollection.create(newTeam)
}
 function updateTeam(teamId, updatedTeam){
   return TeamCollection.updateOne({_id:teamId}, updatedTeam)
 }
 function deleteTeam(teamId) {
   return TeamCollection.findByIdAndDelete(teamId);
 }

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewTeam,
  deleteTeam,
  getAllTeams,
  getTeam,
  updateTeam

}