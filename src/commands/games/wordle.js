const { Wordle } = require('discord-gamecord');

module.exports = {
  callback: async(client, message, args) => {
    const Game = new Wordle({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Wordle',
        color: '#5865F2',
      },
      customWord: null,
      timeoutTime: 60000,
      winMessage: 'You won! The word was **{word}**.',
      loseMessage: 'You lost! The word was **{word}**.',
      playerOnlyMessage: 'Only {player} can use these buttons.',
    });

    Game.startGame();
    Game.on('gameOver', result => {
      return;
    });
  },

  name: 'wordle',
  description: 'Start wordle game.',
};