var friendsData = require("../data/friends");




module.exports = function(app) {

    app.get("/api/friends", function(req, res){
       return res.json(friendsData);
    });


    app.post("/api/friends", function(req, res) {
        res.json(friendsData);
    });

};

for (var i = 0; i < 0; i++) {
var surveyScores = friendsData[i].scores;
console.log(surveyScores);
}




//var match =