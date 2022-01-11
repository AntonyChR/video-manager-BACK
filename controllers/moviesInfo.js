const { loadData } = require('../DataBase/localDB');
const path = require('path');
const getInfoAboutAllMovies = require('../DataBase/getInfoAboutAllMovies');

const pathData = path.join(__dirname, '../data/data.json');
const pathVideos = path.join(__dirname, '../videos/');

const getInfoMovies = (__, res) => {
    try {
        const { data, dataNull } = loadData(pathData);
        const numMovies = Object.keys(data).length;
        if (numMovies === 0) {
            res.status(404).json({
                ok: false,
                msg: 'no data',
            });
        }
        res.json({
            ok: true,
            total: numMovies,
            valid: numMovies - dataNull,
            invalid: dataNull,
            data: data,
        });
    } catch (error) {
        console.log('ERROR IN: getInfoMovies');
        res.status(500).json({ msg: 'Internal error loading data' });
    }
};

const updateInfoMovies = async (__, res) => {
    try {
        await getInfoAboutAllMovies(pathData, pathVideos);
        const {data, dataNull } = loadData(pathData);
        const numMovies = Object.keys(data).length;
        if (numMovies === 0) {
            res.status(404).json({
                ok: false,
                msg: 'no data',
            });
        }
        res.json({
            movies: data,
            ok: true,
            msg: 'Data updated',
            total: numMovies,
            valid: numMovies - dataNull,
            invalid: dataNull,
        });
    } catch (error) {
        console.log('ERROR IN: updateInfoMovies', error);
        res.status(500).json({
            msg: `Error updating information ${error}`,
        });
    }
};

module.exports = {
    getInfoMovies,
    updateInfoMovies,
};
