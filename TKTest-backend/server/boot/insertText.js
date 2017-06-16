module.exports = function(app) {

	var jsonArr = require('../questions.json');

	var Question = app.models.Questions;

	Question.destroyAll();

	// jsonArr.forEach(function(questionDict){
	// 	Question.create(questionDict, function(err, record) {
	// 		if (err) return console.log(err);
	// 	});
	// });
	let test = null;
	
	Question.upsert(jsonArr, (err, obj) => {
		console.log
			if (err){
				return console.log(err)
			}
			this.test = obj
			return console.log("hello")
		}
	);
	console.log("Questions inserted successfully", test);
};


let foo = function( myName, ck){
	
	ck()
	
}

foo("peter", function(){
	console.log("ehllo")
})