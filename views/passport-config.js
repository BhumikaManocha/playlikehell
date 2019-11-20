const LocalStrategy = require('passport-local').Strategy

function initialize(passport, getUserbyemail){
    const authenticateUser = (email,password,done) => {
        const user = getUserbyemail(email)
        if(user == null){
            return done(null,false,{message: 'No user with that gaming name.'})
        }

        try{
            if(await bcrypt.compare(passpord,user.password)){
                return done(null,user)
            }
            else{
                return done(null,false,{message:'Oops! Incorrect password.'})
            }
        }
        catch(e){
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'email'}),  authenticateUser)
    passport.serializeUser((user,done) => { })
    passport.deserializeUser((id,done) => { })

}

module.exports = initialize