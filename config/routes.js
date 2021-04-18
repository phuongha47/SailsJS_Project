/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                
 
  ***************************************************************************/

  'GET /': { view: 'pages/homepage' },
  
  'GET /articles/add': {
    view: 'add'
  },
  'GET /register': {
    view: 'register'
  },
  'GET /articles/list': {
    view: 'list'
  },
  'POST /articles/create': {
    action: 'articles/create'
  }, 
  'POST /articles/edit/:id': {
    action: 'articles/update'
  }, 
  'GET /articles/edit/:id': {
    view: 'edit'
  },
  'GET /articles/list': 'ArticlesController.list',
  'GET /articles/delete/:id': 'ArticlesController.delete',
  //'GET /articles/update/:id': 'ArticlesController.update',
  //'GET /articles/edit/:id:': 'ArticlesController.edit',






 

  

 
  /* 
  'POST /articles/list/:id': 'ArticlesController.delete',
  'GET /': { view: 'pages/homepage' },
  'POST /foo/bar': { action: 'foo/bar' }
  'post /articles': {
    action: 'articles/create'
  }, 
  /*
  'push /articles/add': {
    add: 'articles/add'
  },
  */


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
