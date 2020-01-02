var express = require('express');
var storyController = require('../../db/models/story.js');

console.log(storyController);

var router = express.Router();

console.log(storyController);

router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
      storyController.insertOne({id:{type: 495969, unique: true}, by: 'anything', title: 'henry', score: 4545},
      (error,data)=>{
        if(error) console.log(error);
        else console.log(data);
      }) ;   

  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {});

module.exports = router;
