const { FastType } = require('discord-gamecord');

module.exports = {
  callback: async (client, message, args) => {
    const Game = new FastType({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Fast Type',
        color: '#5865F2',
        description: 'You have {time} seconds to type the sentence below.'
      },
      timeoutTime: 60000,
      sentence: 'Walking out of time.',
      winMessage: 'You won! You finished the type race in {time} seconds with wpm of {wpm}.',
      loseMessage: 'You lost! You didn\'t type the correct sentence in time.',
    });
  
    Game.startGame();
    Game.on('gameOver', result => {
      return;
    });
  },

  name: 'fasttype',
  description: 'Start fastType game.',
};