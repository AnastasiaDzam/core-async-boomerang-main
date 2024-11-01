// Сделаем отдельный класс для отображения игры в консоли.

class View {


  render(datatrack) {
    const yourTeamName = 'Elbrus';

    

    // Тут всё рисуем.
    console.clear();
    console.log(datatrack.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
