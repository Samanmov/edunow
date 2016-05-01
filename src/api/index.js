'use strict';

var express = require('express');
var Week = require('../models/week'); // eller vad vår model-fil heter

var router = express.Router();

//show the week
router.get('/', function (req, res) {
	console.log("hit?");
	// upload from mongoose
  //var Week = mongoose.model('Week', weekSchema);	
  Week.find(function(err, weeks){
  	if(err){
  		return console.error('Error' + err);
  	} else {
  		//console.log('Weeks:'+weeks);
 		res.json({'weeks':weeks});
  	}
  });
});


// create the new week
router.post('/', function (req, res) {
	console.log(req.body);
	Week.create(req.body, function(err, newDoc){
	if(err) {
		return console.error('Error:' + err);
	} else {
		
	}
	});
	
});

// delete the week
// find the id of weekly planning
router.delete('/:id', function (req, res){
	//console.log(req);
	var id = req.params.id;
	Week.findByIdAndRemove(id, function(err, result){
		if(err){
			res.status(500).json({ err: err.message });
		}
		//res.json({ message: 'Car Deleted' });
		console.log('Deleted!');
	});
});

//update the week
router.put('/:id', function (req, res){
	console.log("ssupdate");
	var id = req.params.id;
	var week = req.body;
	if(week && week._id !==id){
		return res.status(500).json({ err: "Ids don't match"});
	}
	Week.findByIdAndUpdate(id, week, {new: true}, function(err, week){
		if (err) {
			return res.status(500).json({ err: err.message });
		}
		res.json({'week' : week, message:'Car Updated'})
	});
});

// search the CourseInfo
router.get('/search/:id', function (req, res) {
	var search  = req.params.id;
	console.log("hit?");
	// hämta ifrån mongoose
  //var week = mongoose.model('Week', weekSchema);	
  Week.findOne({ CourseInfo: search }, function(err, weeks){
  	if(err){
  		return console.error('Error' + err);
  	} else {
  		//console.log('Weeks:'+weeks);
 		res.json({'weeks':weeks});
  	}
  });
});



module.exports = router;

