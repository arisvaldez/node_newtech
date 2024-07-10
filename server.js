const express = require('express');
const path = require('path');
const expressHandlerbars = require('express-handlebars');

const userRouter = require('./routes/user.route');
const bookRouter = require('./routes/book.route');
const siteRouter = require('./routes/site.route');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        // convertir JSON en objeto
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

        // configura engine de plantillas
        this.viewEngineConfiguration();

        // definir endPoint
        this.userEndPoint = '/api/user';
        this.bookEndPoint = '/api/book';
        this.incidentalFormEndPoint = '/api/incidental-form';

        this.routes();
    }

    viewEngineConfiguration() {
        this.app.use(express.static(path.join(__dirname, 'public')));

        this.app.engine('hbs', expressHandlerbars.engine({
            defaultLayout: 'main',
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            extname: '.hbs'
        }));

        this.app.set('view engine', 'hbs');
        this.app.set('views', 'views');
    }

    routes() {
        this.app.use(siteRouter);
        this.app.use(this.userEndPoint, userRouter);
        this.app.use(this.bookEndPoint, bookRouter);

        this.app.get('/', (req, res) => {
            res.render('index')
        })
    }

    run() {
        this.app.listen(this.port,
            () => console.log(`This server running at port ${this.port}`))
    }
}

module.exports = Server;
