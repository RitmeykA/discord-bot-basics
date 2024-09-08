const { TwoZeroFourEight } = require('discord-gamecord');

module.exports = {
  callback: async (client, message, args) => {
    const Game = new TwoZeroFourEight({
      message: message,
      isSlashGame: false,
      embed: {
        title: '2048',
        color: '#00c7fe'
      },

      emojis: {
        up: '⬆️',
        down: '⬇️',
        left: '⬅️',
        right: '➡️',
      },
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      playerOnlyMessage: 'Only {play} can use these buttons.'
      });

      Game.startGame();
      Game.on('gameOver', result => {
        return;
      })
  },

  name: '2048',
  description: 'Start 2048 game.',
};