const fs = require('fs');

const getVideoFileList = (path = '../videos', extension=false) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path,(error, files) => {
            if (!error) {
                const movieList =(extension)? 
                    files
                    :
                    files.map((name) =>name.slice(0, name.length - 4));

                console.log('video files detected: ');
                console.log(movieList);
                resolve(movieList);
            } else {
                reject(error);
            }
        });
    });
};

module.exports = getVideoFileList;
