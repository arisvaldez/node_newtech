const express = require('express');
const userRouter = require('./routes/user.route');
const bookRouter = require('./routes/book.route');
const testConnection = require('./database/db-config');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        // convertir JSON en objeto
        this.app.use(express.json());

        this.userEndPoint = '/api/user';
        this.bookEndPoint = '/api/book';
        this.incidentalFormEndPoint = '/api/incidental-form';

        this.routes();
    }

    routes() {
        this.app.use(this.userEndPoint, userRouter);
        this.app.use(this.bookEndPoint, bookRouter);
        // this.app.use(this.incidentalFormEndPoint);
    }

    run() {
        this.app.listen(this.port,
            () => console.log(`This server running at port ${this.port}`))
    }
}

module.exports = Server;
