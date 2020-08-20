var express = require('express');
var app = express();

var lotteryNumbers = [];

function getLotteryNumbers() {
  lotteryNumbers = [];

  while (lotteryNumbers.length < 6) {
    var newNumber = getRandomNumber(1, 60);
    var canUseNumber = true;

    for (var i = 0; i < lotteryNumbers.length; i++) {
      var currentNumber = lotteryNumbers[i];

      if (currentNumber === newNumber) {
        canUseNumber = false;
        break;
      }
    }

    if (canUseNumber) {
      lotteryNumbers.push(newNumber);
    }
  }

  lotteryNumbers.sort(function (a, b) {
    return a - b;
    // if (a < b) {
    //   return -1;
    // }

    // if (a > b) {
    //   return 1;
    // }

    // return 0;
  });
}

function getRandomNumber(to, from) {
  return Math.max(to, Math.ceil(Math.random() * from));
}

app.get('/', function (request, response) {
  response.json({ message: 'Bem-vindo à API. Acesse /megasena' });
});

app.get('/megasena', function (request, response) {
  getLotteryNumbers();

  response.json({ numbers: lotteryNumbers });
});

app.listen(3001, running);

function running() {
  console.log('Servidor iniciado na porta 3001');
}
