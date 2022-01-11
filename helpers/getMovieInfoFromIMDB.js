const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const searchMovie = async (title) => {
    try {
        const url = `${process.env.IMDB_URL}/SearchMovie/${process.env.IMDB_KEY}/${title}`;
        const { data } = await axios.get(url);
        const { results } = data;
        for (let movie of results) {
            if (
                movie.description.length === 6 ||
                movie.description.length === 10
            ) {
                return movie.id;
            }
        }
    } catch (error) {
        console.log('ERROR IN: searchMovie', error);
    }
};

const getYoutubeTrailer = async (idMovie) => {
    try {
        const url = `${process.env.IMDB_URL}/YouTubeTrailer/${process.env.IMDB_KEY}/${idMovie}`;
        const { data } = await axios.get(url);
        return data.videoUrl;
    } catch (error) {
        console.log('ERROR IN: getYoutubeTrailer', error);
    }
};

const getMovieInfoById = async (idMovie) => {
    try {
        const url = `${process.env.IMDB_URL}/Title/${process.env.IMDB_KEY}/${idMovie}`;
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log('ERROR IN: getMovieInfoById ', error);
    }
};

const getMovieInfoFromIMDB = async (fileName) => {
    const titleMovie = fileName.split('.')[0];
    try {
        console.log('Getting information about: ', titleMovie);
        const idMovie = await searchMovie(titleMovie);
        const trailerlURL = await getYoutubeTrailer(idMovie);
        const {
            title,
            year,
            image,
            runtimeStr,
            plotLocal,
            plot,
            stars,
            genres,
            contentRating,
        } = await getMovieInfoById(idMovie);
        const uid = uuidv4();
        return {
            [uid]: {
                title,
                year,
                img: image,
                trailer: trailerlURL,
                duration: runtimeStr,
                summary: !plotLocal ? plotLocal : plot,
                genres,
                stars,
                classification: contentRating,
                id: uid,
                file: fileName
            },
        };
    } catch (error) {
        console.log('ERROR IN: getMovieInfoById', error);
    }
};

module.exports = getMovieInfoFromIMDB;
