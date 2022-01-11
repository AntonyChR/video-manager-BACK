const path = require('path');
const fs = require('fs');
const { loadData } = require('../DataBase/localDB');

const pathData = path.join(__dirname, '../data/data.json');
const pathVideos = path.join(__dirname, '../videos/');

const searchVideo = (id) => {
    const { data } = loadData(pathData);
    if (!data[id]) return undefined;
    const videoPath = path.join(pathVideos, data[id].file);
    console.log(videoPath)
    return videoPath; 
};

const streamVideo = (req, res) => {
    const pathVideo = searchVideo(req.params.id);
    const stat = fs.statSync(pathVideo);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (pathVideo) {
       if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = end - start + 1;
            const file = fs.createReadStream(pathVideo, { start, end });
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
            };
            res.writeHead(206, head);
            file.pipe(res);
        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            };
            res.writeHead(200, head);
            fs.createReadStream(pathVideo).pipe(res);
        }
    } else {
        res.status(404).json({
            ok: false,
            msg: `video with id: ${req.params.id} not found`,
        });
    }
};

module.exports = { streamVideo };
