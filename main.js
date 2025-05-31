const mazeMap = [
  ['#', '#', '#', '#', '#', '#', '#'],
  ['#', 'S', ' ', ' ', '#', 'E', '#'],
  ['#', ' ', '#', ' ', '#', ' ', '#'],
  ['#', ' ', '#', ' ', ' ', ' ', '#'],
  ['#', '#', '#', '#', '#', '#', '#'],
];

let player = { x: 1, y: 1 }; // 시작 위치(S)
const mazeElement = document.getElementById('maze');
const messageElement = document.getElementById('message');

function drawMaze() {
  let display = '';
  for (let y = 0; y < mazeMap.length; y++) {
    for (let x = 0; x < mazeMap[y].length; x++) {
      if (player.x === x && player.y === y) {
        display += '🙂';
      } else if (mazeMap[y][x] === '#') {
        display += '⬛';
      } else if (mazeMap[y][x] === 'E') {
        display += '🚪';
      } else {
        display += '  ';
      }
    }
    display += '\n';
  }
  mazeElement.textContent = display;
}

function move(direction) {
  let dx = 0, dy = 0;
  if (direction === 'up') dy = -1;
  if (direction === 'down') dy = 1;
  if (direction === 'left') dx = -1;
  if (direction === 'right') dx = 1;

  const newX = player.x + dx;
  const newY = player.y + dy;

  if (mazeMap[newY][newX] === '#') {
    messageElement.textContent = '벽에 막혔어요!';
    return;
  }
  if (mazeMap[newY][newX] === 'E') {
    player.x = newX;
    player.y = newY;
    drawMaze();
    messageElement.textContent = '축하합니다! 미로를 탈출했어요!';
    return;
  }
  player.x = newX;
  player.y = newY;
  messageElement.textContent = '';
  drawMaze();
}

drawMaze();
