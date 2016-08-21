var fs = require('fs');

var doTurn = function (player, cpu, path, moves, move) {
  var attackMove = 'a';
  var spellMove = 's';

  if (move == attackMove) {
    player -=2;
    cpu -= 3;
  } else if (move == spellMove) {
    player -= 3;
    cpu -= 2;
  }
  moves = moves + move;

  if (moves.length == 4) return;

  var movesURL = 'https://github.com/seanewest/rpg/blob/master/moves';
  var movesPath = './moves';
  var attack = moves + attackMove;
  var attackURL = movesURL + '/' + attack + '.md';
  var attackPath = movesPath + '/' + attack + '.md';
  var spell = moves + spellMove;
  var spellURL = movesURL + '/' + spell + '.md';
  var spellPath = movesPath + '/'  + spell + '.md';

  fs.open(path, 'w', function(err, fd) {
    if (err) {
      console.log('error for path ' + path);
      console.log(err);
    } else {
      console.log('generating' + path);
      fs.write(fd, 'Make your move\n\n');

      fs.write(fd, '[attack](' + attackURL + ')');
      fs.write(fd, '\n');

      fs.write(fd, '[spell](' + spellURL + ')');
      fs.write(fd, '\n');
    }
  });

  doTurn(player, cpu, attackPath, moves, attackMove);
  doTurn(player, cpu, spellPath, moves, spellMove);
}

doTurn(10, 10, './readme.md', '', '');
