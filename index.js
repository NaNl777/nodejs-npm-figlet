let figlet = require('figlet');

figlet('INTOCODE!!', function(err, data) {
    if (err) {
        console.log('Error');
    } 
    else {
         console.log(data)
    } 
});

