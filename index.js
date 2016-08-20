var fs = require('fs');

['readme.md', 'attack.md', 'move.md'].forEach(function(path) {
  fs.open(path, 'w', function(err, fd) {
    fs.write(fd, 'Make your move\n');
    fs.write(fd, '[attack](attack.md) [move](move.md)\n');
  });
});

