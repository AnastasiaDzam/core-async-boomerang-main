// Основной файл.
// Запускает игру.
<<<<<<< HEAD
const runInteractiveConsole = require('./src/keyboard')
=======
const runInteractiveConsole = require('./src/runInteractiveConsole');
>>>>>>> 83794cf9bd0a64138695185812a8b481d19dad22
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});


runInteractiveConsole(game.hero)
// Запуск игры.
runInteractiveConsole(game);
game.play();
