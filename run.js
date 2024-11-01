// Основной файл.
// Запускает игру.
const runInteractiveConsole = require('./src/keyboard')
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});


runInteractiveConsole(game.hero)
// Запуск игры.
game.play();
