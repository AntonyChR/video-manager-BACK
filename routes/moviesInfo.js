const {Router} = require("express");
const {getInfoMovies,updateInfoMovies} = require("../controllers/moviesInfo");

const router = Router();

router.get('/',getInfoMovies);
router.post('/update',updateInfoMovies);

module.exports = {router};
