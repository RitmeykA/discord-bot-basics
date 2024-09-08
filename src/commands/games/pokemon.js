const { GuessThePokemon } = require('discord-gamecord');

module.exports = {
  callback: async (client, message, args) => {
    const Game = new GuessThePokemon({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Who\'s that Pokémon?',
        color: '#5865F2',
      },
      timeoutTime: 60000,
      winMessage: 'You guessed it right! It was a {pokemon}.',
      loseMessage: 'Better luck next time! It was a {pokemon}.',
      errMessage: 'Unable to fetch pokemon.',
      playerOnlyMessage: 'Only {player} can use these buttons.',
    });

    Game.startGame();
    Game.on('gameOver', result => {
      return;
    });
  },
  name: 'pokemon',
  description: 'Guess the pokemon!',
};