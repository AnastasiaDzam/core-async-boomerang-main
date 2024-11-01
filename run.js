// Основной файл.
// Запускает игру.
const runInteractiveConsole = require('./src/runInteractiveConsole');
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});
//комментарий 

// Запуск игры.
runInteractiveConsole(game);
game.play();
