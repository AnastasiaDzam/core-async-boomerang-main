// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

// const keyboard = {
//   w: (hero) => hero.moveUp() , // вверх
//   s: (hero) => hero.moveDown(), // вниз
//   a: (hero) => hero.moveLeft(),  // влево
//   d: (hero) => hero.moveRight(),  // вправо
//   space: (hero) => hero.attack(), // атака
// };

const keyboard = {
  w: (game) => game.hero.moveUp() , // вверх
  s: (game) => game.hero.moveDown(), // вниз
  a: (game) => game.hero.moveLeft(),  // влево
  d: (game) => game.hero.moveRight(),  // вправо
  space: (game) => game.hero.attack(), // атака
};

// Какая-то функция.

function runInteractiveConsole(hero) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](hero);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

runInteractiveConsole();

module.exports = runInteractiveConsole;