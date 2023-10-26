const deck = ['6.png', '7.png', '8.png', '9.png', '10.png', 'валет.png', 'дама.png', 'король.png', 'туз.png'];
let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerName = '';
let playerCards = [];
let computerCards = [];
function getRandomCard() {
  return deck[Math.floor(Math.random() * deck.length)];
}
function getCardValue(card) {
  switch (card) {
    case 'валет.png':
      return 2;
    case 'дама.png':
      return 3;
    case 'король.png':
      return 4;
    case 'туз.png':
      return 11;
    default:
      return +card.slice(0, -4); 
  }
}
function showResult() {
  alert(`Очки гравця: ${playerScore}\nОчки комп'ютера: ${computerScore}`);
  let winner;
  if (playerScore > computerScore) {
    winner = 'Гравець';
  } else if (computerScore > playerScore) {
    winner = 'Комп\'ютер';
  }  else {
    winner = 'Нічия';
  }
  alert(`Переміг: ${winner}`);
}
startGame();
function startGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerCards = [];
  computerCards = [];
  document.getElementById('drawBtn').removeAttribute('disabled');
  playerName = prompt('Введіть ваше ім\'я');
  document.getElementById('playerName').textContent = playerName;
  document.getElementById('drawBtn').addEventListener('click', function () {
    if (round === 0) {
      round = 1;
      document.getElementById('roundCounter').textContent = round + ' з 3 раундів';
    }
    const playerCard = getRandomCard();
    const computerCard = getRandomCard();
    playerCards.push(playerCard);
    computerCards.push(computerCard);
    playerScore += getCardValue(playerCard);
    computerScore += getCardValue(computerCard);
    document.getElementById('playerCardImg').src = 'images/' + playerCard;
    document.getElementById('playerScore').textContent = playerScore.toString();
    document.getElementById('computerCardImg').src = 'images/' + computerCard;
    document.getElementById('computerScore').textContent = computerScore.toString();
    document.getElementById('roundCounter').textContent = round + ' з 3 раундів';
    if (round === 3) {
      showResult();
      document.getElementById('drawBtn').setAttribute('disabled', 'true');
    } else {
      round++;
    }
  });
}
