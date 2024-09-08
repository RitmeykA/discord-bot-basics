const { Slots } = require('discord-gamecord');

module.exports = {
  callback: async (client, message, args) => {
    const Game = new Slots({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Slot Machine',
        color: '#00c7fe'
      },

      slots: ['🍇', '🍊', '🍋', '🍌'],
    });

    Game.startGame();
    Game.on('gameover', result => {
      return;
    });
  },
    name: 'slots',
    description: 'start slots game.'
};