const { Router } = require('express');
const {streamVideo} = require('../controllers/streamVideo');

const router = Router();

router.get('/:id',streamVideo);

module.exports  = {router}
