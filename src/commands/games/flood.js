const { Flood } = require('discord-gamecord');

module.exports = {
  callback: async (client, message, args) => {
    const Game = new Flood({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Flood',
        color: '#5865F2',
      },
      difficulty: 13,
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
      winMessage: 'You won! You took **{turns}** turns.',
      loseMessage: 'You lost! You took **{turns}** turns.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    
    Game.startGame();
    Game.on('gameOver', result => {
      return;
    });
  },

  name: 'flood',
  description: 'Start flood game.',
};