var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

////
mongoose.connect("mongodb+srv://mongodb1247:mongodb1247@cluster0.zztka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


const Schema = mongoose.Schema;
const userSchema = {
    PL: String,
    ANG: String

}

const User = mongoose.model("User", userSchema)

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})




app.post("/", function(req, res) {
    let newNote = new User({
        PL: req.body.title,
        ANG: req.body.content

    });
    newNote.save();

    res.redirect('/');
})