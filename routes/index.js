
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Index' });
};

exports.dashboard = function(req, res){
    res.render('dashboard', { title: 'Settings' });
};
