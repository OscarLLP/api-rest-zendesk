const { Router } = require('express');
const router = Router();
const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: 'https://chiper3095.zendesk.com',
    email: 'oscar.lopez@chiper.co',
    token: 'ouD6lCaDoNtjL08ah38vI7qBwlOkw2gFxSiXALhE'
});


//routes
router.post('/create-user', (req, res) => {
    const data = req.body;
    zendesk.users.create(data).then((x)=>{
        res.json(x);
    }).catch(err => res.json(err));
});

router.get('/list-user', (req, res) => {
    zendesk.users.list().then(x => res.json(x)).catch(err => res.json(err));
});

router.put('/update-user', (req, res) => {
    const data = req.body;
    zendesk.users.update(data.id, {
        name: data.name
    }).then((result) => {
        res.json(result);
    }).catch(err => res.json(err));
});

router.delete('/delete-user', (req, res) => {
    const data = req.body;
    zendesk.users.delete(data.id).then(resultado => {
        console.log('TRUE')
        res.json(resultado);
    }).catch(err => {
        console.log('FALSE')
        res.json(err)
    });
});

module.exports = router;