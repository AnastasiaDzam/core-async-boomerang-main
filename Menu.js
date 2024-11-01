import inquirer from 'inquirer';

const players = [
  { name: 'Мамут', family_name: 'Рахал', role: '🎅', level: 100 },
  { name: 'Яша', family_name: 'Лава', role: '😸', level: 50 },
  { name: 'Матьё', family_name: 'Бал', role: '🙊', level: 600 },
];

async function choosePlayer() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'Выбранный игрок',
      message: 'Выбери за кого играть:',
      choices: players.map((player, index) => ({
        name: player.name,
        value: index,
      })),
    },
  ]);

  function ShowPlayer() {
    console.log(
      `Вы выбрали игрока ${player.name} ${player.family_name} ${player.role} ${player.level}`,
    );
  }
  const selectedPlayer = players[answers.selectedPlayer];

  ShowPlayer(selectedPlayer);
}

choosePlayer();
