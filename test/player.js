process.env.NODE_ENV = 'test'

const chai = require('chai');
const assert = require('assert');
const models = require('../models');
const truncate = require('./truncate');

describe('Player model', function () {

    beforeEach(async () => {
        await truncate();

        await models.sequelize.sync({
            force: true,
            match: /^test/,
            logging: false,
        })
        // .then(() => {
        //     done();
        // });
    });

    describe('Create and find a player', done => {
        it('saves a player to database and retrieves it', done => {
            const player = models.Player.create({
                name: 'TESTPLAYER',
            }).then(() => {
                models.Player.findOne({ where: { name: 'TESTPLAYER' }}).then(player => {
                    if (player !== null) {
                        done();
                    }
                });
            }).catch((error) => {
                console.log('ERROR: ', error);
                done();
            });
        });
    });

    // describe('Finding players', done => {
    //     it('finds a player by name', done => {
    //         console.log('finding player...');
    //         // const player = models.Player.find();
    //         models.Player.findOne({ where: { name: 'TESTPLAYER' } }).then(player => {
    //             console.log(player);
    //             // player will be the first entry of the players table with the title 'aProject' || null
    //         })
    //     });
    // });
});