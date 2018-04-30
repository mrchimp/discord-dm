const Command = require('./Command.js');

class Attack extends Command {
    run(msg) {
        let input = msg.content.split(' ');
        let command_name = input.shift();
        let victim = input.shift();

        if (!victim) {
            msg.reply('You hit yourself in the ear. You should aim at someone else next time..');
            return;
        }

        msg.reply(`You hit ${victim}.`);
    }
}

module.exports = Attack;