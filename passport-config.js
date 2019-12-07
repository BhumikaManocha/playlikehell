// const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt');




// function initialize(passport, getUserByEmail, getUserById){
//     UserSchema.statics.authenticateUser = async (email,password,done) => {
//         // const user = getUserByEmail(email)
//         User.findOne({email: email}).exec(function(err,user){
//         if(user == null){
//             return done(null,false,{message: 'No user with that gaming name.'})
//         }

//         try{
//             if(await bcrypt.compare(password,user.password)){
//                 return done(null,user)
//             }
//             else{
//                 return done(null,false,{message:'Oops! Incorrect password.'})
//             }
//         }
//         catch(e){
//             return done(e)
//         }
//     })
//     }

//     passport.use(new LocalStrategy({ usernameField: 'email'},  authenticateUser))
//     passport.serializeUser((user,done) => done(null,user.id))
//     passport.deserializeUser((id,done) => {
//         return done(null,getUserById(id))
//     })

// }





// function initialize(passport, getUserByEmail, getUserById){
//     const authenticateUser = async (email,password,done) => {
//         const user = getUserByEmail(email)
//         if(user == null){
//             return done(null,false,{message: 'No user with that gaming name.'})
//         }

//         try{
//             if(await bcrypt.compare(password,user.password)){
//                 return done(null,user)
//             }
//             else{
//                 return done(null,false,{message:'Oops! Incorrect password.'})
//             }
//         }
//         catch(e){
//             return done(e)
//         }
//     }

//     passport.use(new LocalStrategy({ usernameField: 'email'},  authenticateUser))
//     passport.serializeUser((user,done) => done(null,user.id))
//     passport.deserializeUser((id,done) => {
//         return done(null,getUserById(id))
//     })

// }

// module.exports = initialize


const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const mongoose    = require('mongoose');
const User        = mongoose.model('users');//accessing the users from model name

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
			.then(user => {
				if(user){
					return done(null, user);
				}
				return done(null, false);
			})
			.catch(err => console.log(err));
		})
	);
};
