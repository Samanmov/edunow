'use strict';

var mongoose = require('mongoose');


var weekSchema = new mongoose.Schema({
	CourseInfo:String,
	Weeks: 
		[
			{week: Number,
			 intro: String,			
			 text: String,
			 question: String,
			 answer: String,
			 title: String,
			 definition : String,
			 edit : Boolean}
		]
});

var week = mongoose.model('week', weekSchema);

module.exports = week;
	






