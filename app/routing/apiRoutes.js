var friendsData = require("../data/friends");





module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {
        var surveyUserData = req.body;
        var mostCompatibleUser = "";
        var currentTotalDifference= 0; 

        for (var i = 0; i < friendsData.length; i++) {
            var friendsScores = friendsData[i].scores;
            var totalDifference = 0;
            for (var j = 0; j < friendsScores.length; j++) {
                var friendScore = friendsScores[j];
                var userScore = surveyUserData.scores[j];
                totalDifference = totalDifference + Math.abs(friendScore - userScore);
            }
            if (i === 0 || totalDifference < currentTotalDifference ) {
                mostCompatibleUser=friendsData[i];
            }
            console.log(totalDifference);
            console.log(friendsData[i].name);
            currentTotalDifference=totalDifference;
        }
        console.log("testing compatible user");
        console.log(mostCompatibleUser);
        // friendsData.push(req.body);
        return res.json(mostCompatibleUser);
    });

};

