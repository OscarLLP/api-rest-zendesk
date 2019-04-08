const express = require('express');
const app = express();
const morgan = require('morgan');
const Zendesk = require('zendesk-node-api');

/// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//midllwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// router
app.use(require('./routes/index.js'));

/// setting server
app.listen(3000, () => {
    console.log(`server on puerto ${app.get('port')}`);
});

/***app.get('/', (req, res) => {
    res.send('hello world');
}); */


