const assert = require('assert');
const Player = require('../Models/Player');

let player;

describe('Finding Player models', function () {
    beforeEach((done) => {
        player = new Player({
            id: 'TESTPLAYERID',
            name: 'TESTPLAYER',
        });

        player.save().then(() => {
            assert(player.isNew === false);
            done();
        });
    });
    
    it('finds a player by Discord ID', function (done) {
        Player.findOne({
            id: 'TESTPLAYERID',
        }).then((result) => {
            assert(result.id === 'TESTPLAYERID');
            done();
        }).catch(done);
    });
    
    it('finds a player by DB ID', function (done) {
        Player.findOne({
            _id: player._id,
        }).then((result) => {
            assert(result._id.toString() === player._id.toString());
            done();
        }).catch(done);
    });
});
