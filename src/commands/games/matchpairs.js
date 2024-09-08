const { MatchPairs } = require('discord-gamecord');

module.exports = {
  callback: async(client, message, args) => {
    const Game = new MatchPairs({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Match Pairs',
        color: '#5865F2',
        description: 'Click on the buttons to match emojis with their pairs.',
      },
      timeoutTime: 60000,
      emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
      winMessage: 'You won the game! You turned a total of `{tilesTurned}`.',
      loseMessage: 'You lost the game.',
      playerOnlyMessage: 'Only {player} can use these buttons.',
    });
    Game.startGame();
    Game.on('gameOver', result => {
      return;
    });
  },

  name: 'matchpairs',
  description: 'Start a match pairs game.',
};