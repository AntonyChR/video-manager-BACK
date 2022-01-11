const express = require('express');
const {router: moviesInfoRouter}= require('../routes/moviesInfo');
const {router: streamVideo}= require('../routes/streamVideo');
const cors = require('cors')

const corsOptions  = {
    origin: '*'
}

class Server {
    constructor(port){
        this.port = port;
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors(corsOptions));
    }

    routes(){
        this.app.use('/info',moviesInfoRouter);
        this.app.use('/video',streamVideo);
    }

    start(){
        this.app.listen(this.port, ()=>{
            console.log('Server listening on port: ', this.port);
        })
    }
}

module.exports = Server;
