// if(process.env.NODE_ENV !== 'production'){
    require('dotenv');
// }

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./model/users');
const jwt = require('jsonwebtoken');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://bhumika:bhumi3699@my-first-cluster-p64nb.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     console.log(err);
//   const collection = client.db("test").collection("devices");
//   console.log((collection));
//   // perform actions on the collection object
//   client.close();
// });


mongoose
  .connect(
    "mongodb+srv://bhumika:bhumi3699@my-first-cluster-p64nb.mongodb.net/test?retryWrites=true&w=majority"  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log("error -----",err));



// const initializePassport = require('./passport-config')
// initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
// )

// const users = [];



app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:true}));
app.use(flash());
// app.use(session({
//     secret:'asd',
//     // resave:false,
//     saveUninitialized:true
// }))
app.use(passport.initialize())
require('./passport-config')(passport);
// app.use(passport.session())


app.use('*/images',express.static('public/images'));



app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/register',(req,res) => {
    res.render('register')
})

// app.post('/register', async(req,res) => {
//     try{
//         const hashedpassword = await bcrypt.hash(req.body.password,10);
//         users.push({
//             name : req.body.name,
//             gamingname :req.body.gamingname,
//             dateofbirth : req.body.dateofbirth,
//             email : req.body.email,
//             password: hashedpassword
//         })
//         res.redirect('/login');
//     }
//     catch(err){
//         res.redirect('/register');
//     }
//     console.log("done")
//     console.log(users);
// })

app.post('/register',(req,res) => {
    User.findOne({email : req.body.email},async(err,res)=>{
        if(err){
            console.log("This email has already been taken.")
        }
        else{
            const hashedpassword = await bcrypt.hash(req.body.password,10);
            // users.push({
            //     name : req.body.name,
            //     gamingname :req.body.gamingname,
            //     dateofbirth : req.body.dateofbirth,
            //     email : req.body.email,
            //     password: hashedpassword
            // })
            res.redirect('/login');
        }
    })
})



app.get('/login',(req,res) => {
    res.render('login')
})

app.post('/login',passport.authenticate('local',{
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}))



app.get('/dice',(req,res)=>{
    res.render('dice')
})

// app.get('/spin',(req,res)=>{
//     res.render('spinthebottle')
// })

app.get('/puzzle',(req,res)=>{
    res.render('puzzle')
})

// app.get('/quiz',(req,res)=>{
//     res.render('quiz')
// })

app.get('/hypnotizer',(req,res)=>{
    res.render('hypnotizer')
})

app.get('/crossword',(req,res)=>{
    res.render('crossword')
})

app.listen(4000,() => console.log("Server running on http://localhost:4000"));  