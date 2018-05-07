const assert = require('assert');
const Player = require('../Models/Player');

describe('Saving Player model', function () {
    it('saves a player to database', function (done) {
        const player = new Player({
            id: 'TESTPLAYER',
            name: 'TESTPLAYER',
        });

        player.save().then(function () {
            assert(player.isNew === false);

            done();
        }).catch(function (error) {
            console.log('ERROR: ', error);
            done();
        });
    });
});
