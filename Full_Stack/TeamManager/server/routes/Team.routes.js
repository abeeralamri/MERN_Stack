const TeamControllers = require('../countrollers/team.countroller');

module.exports = function(app)  {
    app.get('/players/list/', TeamControllers.AllTeam);
    app.post('/players/addPlayer', TeamControllers.createPlayer);
    app.delete('/players/:id', TeamControllers.DeletePlayer);
    app.put('/players/:id', TeamControllers.updatePlayer);

}