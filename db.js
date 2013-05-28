var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
    name : {type:String, required:true },
    talent : [{ instrument : String }],
    location : {type:Number, required:true},
    photo : String

});

var Band = new Schema({
    name: {type: String, required:true},
    members: [{name:String, link:String}],
    logo: String,
    location: String,
    genre: String,
    like: [String],
    contact: String,
    soundcloud: String

});

mongoose.model('User', User);
mongoose.model('Band', Band);

var mongoUri = process.env.MONGOLAB_URI
    || process.env.MONGOHQ_URL
    || 'mongodb://localhost/bandleague';

mongoose.connect(mongoUri);
