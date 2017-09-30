
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/CURD',function(err){
	if(err){
      console.log(err);
    }else{
      console.log('Mongodb Connected....');
    }
});


var userSchema = new Schema({

	name:String,
	username:{type :String , require:true },
	password:{type :String , require:true},
	admin : Boolean,
	location:String,
	meta:{
		age:Number,
		website:String
	},
	created_at:Date,
	updated_at:Date
});

userSchema.methods.dudify = function(){

	this.name = this.name + '-dude';
	return this.name;
};

//not working 

// userSchema.pre("save", true, function(next, done) {
//     var self = this;

//     var currentDate  = new Date();
// 	this.updated_at = currentDate;

// 	if(!this.created_at)
// 		this.created_at =currentDate;

// 	next();
// }); 


var User = mongoose.model('User',userSchema);
module.exports = User;



