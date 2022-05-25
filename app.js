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

let and = 'angielskie'
    ////
mongoose.connect("mongodb+srv://mongodb1247:mongodb1247@cluster0.zztka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


const Schema = mongoose.Schema;
const userSchema = {
    PL: String,
    ANG: String

}

const User = mongoose.model("User", userSchema);
const User2 = mongoose.model("User2", userSchema)

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

const finder = User.find(function(err, docs) {
    if (err) {
        console.log(err);
    } else {
        console.log("First function call : ", docs);
        and = docs;
    }
});
setTimeout(read, 8000, true);


function read() {
    and.forEach(element => {
        const Word = element.ANG
        console.log(Word)
        document.getElementsByClassName("wynik").innerHTML = Word;
    });

};





// User.find().mo(function(p) {
//     print(
//         user.user.replace("kot", "CAAT")
//     );
// });