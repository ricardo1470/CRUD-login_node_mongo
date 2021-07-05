const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');
const favicon = require('serve-favicon');
const path = require('path');
const methodOverrie = require('method-override');
const session = require('express-session');

// initializations
const app = express();
require('./database');

const port = 9000 || process.env.PORT;

// importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//midelwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(methodOverrie('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//global variables

//routes
app.use('/', indexRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.html');
});

// listen server on port
app.listen(port, function () {
    console.log(`CORS-enabled, web server listening on port: ${port}`)
});
