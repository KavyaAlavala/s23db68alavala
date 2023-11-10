require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var devicesRouter = require('./routes/devices');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var devices = require("./models/devices");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/devices', devicesRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

const connectionString =process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on
//server start
async function recreateDB(){
// Delete everything
await devices.deleteMany();
let instance1 = new
devices({name:"Mobile", brand:'Apple',
price:543});
instance1.save().then(doc=>{
console.log("First object saved")

let instance2 = new
devices({name:"Laptop", brand:'HP',
price:5430});
instance2.save()
console.log("Second object saved")

let instance3 = new
devices({name:"Watch", brand:'Boat',
price:165});
instance3.save()
console.log("Third object saved")}


).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}


module.exports = app;