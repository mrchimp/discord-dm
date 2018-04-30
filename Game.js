const Discord = require('discord.js');
const Attack = require('./Commands/Attack');
const Look = require('./Commands/Look');
const Ping = require('./Commands/Ping');

class Game {
    constructor(token) {
        this.client = new Discord.Client();
        this.token = token;
        this.commands = {
            'attack': Attack,
            'look': Look,
            'ping': Ping,
        };
        this.client.on('ready', this.onReady.bind(this));
        this.client.on('message', this.onMessage.bind(this));
        this.client.login(token);
    }

    onReady() {
        console.log(`Logged in as ${this.client.user.tag}!`);
    }

    onMessage(msg) {
        let input = msg.content.split(' ');
        let command_name = input.shift();

        if (!(command_name in this.commands)) {
            return;
        }

        const command = new this.commands[command_name](this.client);

        command.run(msg);
    }
}

module.exports = Game;