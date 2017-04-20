//============================
// Import our dependencies, and
// our controllers
//============================
const express = require('express');
const _ourController = require('./controllers/_our-controller');
const Comment = require('./model/comments');

//============================
// Export the api routes
//============================
module.exports = function(app) {

  //create the router
  const apiRoutes = express.Router();

  //define first router
  apiRoutes.get('/helloworld', _ourController.helloworld);

apiRoutes.route('/comments')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Comment.find(function(err, comments) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(comments)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    var comment = new Comment();
    //body parser lets us use the req.body
    comment.author = req.body.author;
    comment.text = req.body.text;

    comment.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment successfully added!' });
    });
  });
  //tell the app to use apiRoutes
  //and set the base url to
  // localhost:300/api
  app.use('/api', apiRoutes);
}
