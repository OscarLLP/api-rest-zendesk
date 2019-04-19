const { Router } = require('express');
const router = Router();
const Zendesk = require('zendesk-node-api');
const Joi = require('joi');

const userSchema = require('../../modelo/user');

const zendesk = new Zendesk({
    url: 'https://chiper3095.zendesk.com',
    email: 'oscar.lopez@chiper.co',
    token: 'ouD6lCaDoNtjL08ah38vI7qBwlOkw2gFxSiXALhE'
});


//
router.post('/create-user', (req, res) => {
    console.log(req.body);
    const data = req.body;
    const result = Joi.validate(data, userSchema, { abortEarly: false });
    if (result.error === null) {
        data.phone = data.phone.toString();
        zendesk.users.create(data).then((x)=>{
            if (x.details) res.json(x.details);
            res.json({
                name: x.user.name,
                phone: x.user.phone,
                email: x.user.email

            });
        }).catch(err => res.json(err));
    } else {
        const mensaje = result.error.details.map(x => x.message);
        res.json({mensaje: mensaje})
    }
});

router.get('/list-user', (req, res) => {
    zendesk.users.list().then(x => {
        const miLista = x.map(user => {
            return {
                email: user.email,
                id: user.id
            }
        })
        res.json(miLista);
    }).catch(err => res.json(err));
});

router.put('/update-user', (req, res) => {
    const data = req.body;
    zendesk.users.update(data.id, {
        name: data.name,
        email: data.email
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