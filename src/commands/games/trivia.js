const { Trivia } = require('discord-gamecord');

module.exports = {
  callback: async (client, message, args) => {
    const Game = new Trivia({
      message: message,
      isSlashGame: false,
      embed: {
        title: 'Trivia',
        color: '#00c7fe',
        description: 'You have 60 seconds to guess the answer.'
      },
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      trueButtonStyle: 'SUCCESS',
      falseButtonStyle: 'DANGER',
      mode: 'multiple',
      difficulty: 'medium',
      winMessage: 'You won! The correct answer is {answer}.',
      loseMessage: 'You lost! The correct answer was {answer}.',
      errMessage: 'Unable to fetch questions.',
      playeOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
    Game.on('gameOver', result => {
      return;
    });
  },

  name: 'trivia',
  description: 'Start trivia game.',
};