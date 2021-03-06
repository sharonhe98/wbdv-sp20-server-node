var express = require('express');
var app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_zpwtnc11:et5rt37bgb61ishk49ck5jig1a@ds155626.mlab.com:55626/heroku_zpwtnc11',
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./controllers/quizzes.controller.server')(app);
require('./controllers/questions.controller.server')(app);
require('./controllers/quiz-attempts.controller.server')(app);
app.listen(3000);

console.log('server started!');
