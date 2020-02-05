var data = require("../data.json");

exports.addFriend = function(request, response) {  
	// Your code goes here
	name = request.query.name;
	desc = request.query.description;
	friend = {'name': name, 'description': desc, 'imageURL': 'http://lorempixel.com/400/400/people'};
	console.log(friend);
	data['friends'].push(friend);
	response.render('index', data);
 }