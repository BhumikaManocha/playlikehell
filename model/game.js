const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Gameschema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    game1:{
        type:Number,
        default:0
    },
    game2:{
        type:Number,
        default:0
    },
    game3:{
        type:Number,
        default:0
    },
     game4:{
        type:Number,
        default:0
    }
});


module.exports = game = mongoose.Schema('game',Gameschema);
