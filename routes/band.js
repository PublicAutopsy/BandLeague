
/*
 * GET users listing.
 */

exports.index = function(req, res){
    res.render('bands', { title: 'Band' });
};