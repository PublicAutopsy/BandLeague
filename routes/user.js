
/*
 * GET users listing.
 */

exports.index = function(req, res){
    res.render('musicians', { title: 'User' });
};