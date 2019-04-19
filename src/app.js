
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

/// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//midllwares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// router
app.use(require('./routes/user.routes.js'));
app.use(require('./routes/chat.routes.js'));

/// setting server
app.listen(3000, () => {
    console.log(`server on puerto ${app.get('port')}`);
});

/***app.get('/', (req, res) => {
    res.send('hello world');
}); */


