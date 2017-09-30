var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var server = app.listen(3000, function(){
	console.log("Example app listening at http:localhost:3000");
});

// var port = process.env.PORT || 3000
// app.listen(port);

var User  = require('./models/user');

var chris = new  User({
	name:'Chris',
	Username:'malipraful',
	password:'praful',
});


chris.save(function(err){
	if(err)throw err;
	console.log('User save Successfully!');
});

chris.dudify(function(err , name){
	if(err) 
	 throw err;
	console.log('Your New name is '+ name);
});

var newUser = User({
	name:'Peter Quill',
	username:'Malipraful',
	password:'password',
	admin:true
});

//save the user
newUser.save(function(err){
	if(err) throw err;
	console.log('User Created!');
});

//get all the users
User.find({},function(err , users){
	if(err) throw err;
	console.log(users);
});

User.find({username:'Malipraful'},function(err , user){
	if(err) throw err;
	console.log(user);
});

User.findById('57af0e0f1c6aa37014000001' , function(err ,user){
	if(err) throw err;
	console.log(user);
});

var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({admin:true}).where('created_at').gt(monthAgo).exec(function(err , user){
	if(err) throw err;
	console.log(user)
});

User.findById('57af0e0f1c6aa37014000001', function(err , user){
	if(err) throw err;
	user.location = 'INDIA';

	user.save(function(err){
		if(err) throw err;
		console.log('User Successfully Updated!');
	});
});

User.findOneAndUpdate({username:'Malipraful'},{ username:'PrafulMali'},function(err , user){

	if(err) throw err;
	console.log(user);
});

User.findByIdAndUpdate('57af0e0f1c6aa37014000001',{username:'startloard88'}, function(err, user){
	if(err) throw err;
	console.log(user);
});

User.findOneAndRemove({username:'startloard88'}, function(err , user){
	if(err) throw err;
	console.log(user);
	console.log('User Successfully Delete !');

});


module.exports = app