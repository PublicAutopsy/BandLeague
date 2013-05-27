var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({

});
var Band = new Schema({

});

mongoose.model('User', User);
mongoose.model('Band', Band);

var mongoUri = process.env.MONGOLAB_URI
    || process.env.MONGOHQ_URL
    || 'mongodb://localhost/bandleague';

mongoose.connect(mongoUri);
