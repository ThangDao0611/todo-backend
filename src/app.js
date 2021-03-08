import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
require('dotenv').config();

import indexRouter from './routes/index';


import { save, view, dodestroy } from './controller/notes';

let app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(join(__dirname, 'public'));

app.use('/', indexRouter);


app.post('/api/note', save);
app.get('/api/note', view);
app.delete('/api/note', dodestroy);


app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});





// catch 404 and forward to error handler
app.use( (req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) =>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

let server = require('http').createServer(app);
server.listen(3030);

export default app;
