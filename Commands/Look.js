const Command = require('./Command');

class Look extends Command {
    run(msg) {
        let reply_text = 'You look around you. To the west is a list of channels. Towards the east you can see a list of names.';

        // check if we're in a DM
        if (msg.channel.type !== 'dm') {
            const channel = this.client.channels.get(msg.channel.id);
            const user_count = channel.members.array().length;
            reply_text = reply_text + ` There are ${user_count} people near you.`;
        }

        msg.reply(reply_text);
    }
}

module.exports = Look;