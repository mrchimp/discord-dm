const Command = require('./Command');

class Ping extends Command {
    run(msg) {
        msg.reply('pong');
    }
}

module.exports = Ping;