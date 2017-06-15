var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
res.type('text/plain');
res.send('Starting with my first MEAN STACK application from scratch.....');
});

// when url has /about after the application server path i.e. localhost /spityl493/127.0.0.1
app.get('/about', function(req, res){
res.type('text/plain');
res.send('Need to write html code for my login page');
});


// custom 404 page
app.use(function(req, res){
res.type('text/plain');
res.status(404);
res.send('404 - Error.. meaning resource requested is not found');
});


// custom 500 page
app.use(function(err, req, res, next){
console.error(err.stack);
res.type('text/plain');
res.status(500);
res.send('500 - error meaning server failed to load a resource i.e. internal error');
});


app.listen(app.get('port'), function(){
console.log( 'Softv on http://localhost:' + app.get('port') + '; ha ha ..wondering how to close :-) press ctrl+c' );
});