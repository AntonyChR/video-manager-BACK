require('colors');

const getMovieInfoFromIMDB = require('../helpers/getMovieInfoFromIMDB');
const getVideoFileList = require('../helpers/getVideoFileList');
const {saveData} = require('./localDB');

const getInfoAboutAllMovies = async (pathToSaveData, pathMoviesFiles) => {
    console.log('UPDATING DATA'.red)
    try{
        const fileVideoList =await getVideoFileList(pathMoviesFiles, true);
        let infoMovies = {};
        for(let title of fileVideoList){
            const newInfo = await getMovieInfoFromIMDB(title);
            infoMovies = {...newInfo, ...infoMovies};
        }
        saveData(pathToSaveData,infoMovies);
        console.log('DATA UPDATED'.green);

    } catch(error){
        console.log(error)
    }
}

module.exports =getInfoAboutAllMovies;
