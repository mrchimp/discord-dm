const assert = require('assert');
const Player = require('../Models/Player');

let player;

describe('Removing Player models', function () {
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

    it('removes a player by Discord ID', function (done) {
        Player.findOne({
            id: 'TESTPLAYERID',
        }).then((result) => {
            assert(result.id === 'TESTPLAYERID');
            done();
        }).catch(done);
    });
});
