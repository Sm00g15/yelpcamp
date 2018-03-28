var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment  = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg",
		description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
	},
	{
		name: "Desert Mesa",
		image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
		description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
	},
	{
		name: "Canyon Floor",
		image: "https://farm8.staticflickr.com/7338/9627572189_12dbd88ebe.jpg",
		description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
	},
]

function seedDB(){
	//Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err)
		}
		console.log("Removed Campgrounds");
		data.forEach(function(seed){
		Campground.create(seed, function(err, campground){
			if(err) {
				console.log(err);
			} else {
				console.log("added a campground");
				// create a comment
				Comment.create(
					{
						text: "This place is great, but I wish there was interenet",
						author: "Homer"
					}, function(err, comment) {
						if(err){
							console.log(err);
						} else {
						campground.comments.push(comment._id);
						campground.save();
						console.log("created new comment");
						}
					});
			}
		});
	});
});
}

module.exports = seedDB;
