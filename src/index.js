import './styles.css';

// Ссылка на картинку гоблина
const goblinImg = 'https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png';

const game = document.getElementById('game');
const cells = [];

// создаём поле 4x4
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  game.appendChild(cell);
  cells.push(cell);
}

// создаём img с гоблином
const goblin = document.createElement('img');
goblin.src = goblinImg;
goblin.alt = 'Goblin';
goblin.style.width = '80%';
goblin.style.height = '80%';
goblin.style.cursor = 'pointer';

// функция случайного перемещения
function moveGoblin() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * cells.length);
  } while (cells[newIndex].contains(goblin));

  cells[newIndex].appendChild(goblin);
}

// ставим гоблина сразу
moveGoblin();

// перемещаем каждые 1.5 секунды
setInterval(moveGoblin, 1500);
