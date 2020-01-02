var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  // your code here!
  var dummyData = new mongoose.Schema({
    name: String,
    id: Number
  });

  var Data = mongoose.model('dummydata',dummyData);
  
  Data.create({name: data[0].by.about, id: data[0].by.id},(error, data)=>{
    if(error) console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',error);
    else console.log(data);
  })
  
};

seedDb(data);
