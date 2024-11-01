// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});
//комментарий 

// Запуск игры.
game.play();
