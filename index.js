require('dotenv').load();

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

if (!token) {
  console.log('You need to set DISCORD_TOKEN. Maybe in .env.');
  process.exit();
}

const commands = [
  'look',
  'ping',
  'attack',
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let input = msg.content.split(' ');
  let command = input.shift();

  if (!commands.includes(command)) {
    return;
  }

  if (msg.content === 'ping') {
    msg.reply('pong');
    return;
  }

  if (command === 'look') {
    let reply_text = 'You look around you. To the west is a list of channels. Towards the east you can see a list of names.';

    // check if we're in a DM
    if (msg.channel.type !== 'dm') {
      const channel = client.channels.get(msg.channel.id);
      const user_count = channel.members.array().length;
      reply_text = reply_text + ` There are ${user_count} people near you.`;
    }

    msg.reply(reply_text);
    return;
  }

  if (command === 'attack') {
    let victim = input.shift();

    if (!victim) {
      msg.reply('You hit yourself in the ear. You should aim at someone else next time..');
      return;
    }

    msg.reply(`You hit ${victim}.`);

    return
  }
});

client.login(token);
