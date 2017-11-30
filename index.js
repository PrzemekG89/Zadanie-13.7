var fs = require('fs');
var path = require('path');
var colors = require('colors');
var StatMode = require('stat-mode');

/*fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.yellow);
    console.log(data);
    fs.appendFile('./text.txt', '\nOraz po zapisie w pliku txt', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie.'.green);
            console.log(data);
        });
    });
});*/

fs.readdir('./', function(err, files) {
    fs.writeFile('./catalog.txt', files.join('\n'), function(err) {
        if (err) throw err;
    });
    console.log('Zapisano!'.red);
});