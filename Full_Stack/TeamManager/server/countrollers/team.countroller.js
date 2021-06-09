const {Player} = require('../models/TeamManager');


module.exports = {
    createPlayer : (req, res) => {
        Player.create(req.body)
        .then(team => res.json(team))
        .catch(err => res.status(400).json(err));
 

    },

    AllTeam : (req, res) => {
        Player.find({})
        .then(team => res.json(team))
        .catch(err => res.status(400).json(err));
    },
    DeletePlayer : (req, res) => {
        Player.deleteOne({_id : req.params.id})
        .then(team => res.json(team))
        .catch(err => res.status(400).json(err));

    },
    updatePlayer : (req, res) => {
        Player.updateOne({_id:req.params.id}, req.body, {new:true})
        .then(updatedPlayer => {
            res.json(updatedPlayer)
        })
    }
}