const { Router } = require('express');
const router = Router();
const axios = require('axios');

const c = axios.create({
    headers: {'Authorization': `Bearer 8eccc11a42c828b1fbd57c661fefbf17c8323a74bd4a3b4c23f63acaa1f086db`}
})

router.get('/chat', (req, res) => {
    c.post('https://www.zopim.com/oauth2/token?response_type=token&client_id=integracion_chiper&scope=read&redirect_uri=http://localhost:3000/api/chat/token')
        .then(x => console.log(x)).catch(x => console.log(x));
});

router.get('/api/chat/token', (req, res) => {
    console.log(res);
})

module.exports = router;