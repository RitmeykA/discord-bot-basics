const { Minesweeper } = require('discord-gamecord');

module.exports = {
  callback: async (client, message, args) => {
    const Game = new Minesweeper({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Minesweeper',
        color: '#5865F2',
        description: 'Click on the buttons to reveal the blocks except mines.'
      },
      emojis: { flag: '🚩', mine: '💣' },
      mines: 5,
      timeoutTime: 60000,
      winMessage: 'You won the game!',
      loseMessage: 'You lost the game!',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
    Game.on('gameOver', result => {
      return;
    });
  },

  name: 'minesweeper',
  description: 'Start minesweeper game.',
};