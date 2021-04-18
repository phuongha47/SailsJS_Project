/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
      add: function(req, res){
            res.view('add');
    },
    list: function (req, res) {
        console.log('Here');
        Articles.find().exec(function (err, articles) {
            if (err) {
                res.send(500, { error: 'Database Error' })
            }
            res.view('list', { articles: articles });
        });
    },
    delete: function(req, res){
        console.log('Here1');
        Articles.destroy(req.param('id')).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/articles/list');
        });

        return false;
    },
  

};

