# FriendFinder

This app provides the user with the means to find a compatible "friend". The user rates a series of questions on a scale from 1 - 5. Based on their responses, the app then finds a match for the user. The user's answers are compared to that of all the other user's responses in the database. A match is determined by searching for the least variance in responses. Responses are compared one to one. Differences are added up to determine a total difference. The smallest total difference score determines the most compatible user. 

## Instructions
To run the app, the user must use the browser. To begin, the user will enter localhost:8080. That will direct them to the home page. There, they will click the "Begin Survey" button to be directed to the survey questions. The user must enter their name and link to their photo, as they are required fields. The user will then provide responses to the 10 questions. Once the user has completed all of the questions, they will press the submit button. They will then be presented with their "Best Match". 

## Technologies Used
This app has html components, as it is displayed in the browser. Specifically, two html pages comprise the views. The server is handled using node. The express npm package is also utilized to support the server functions. The live app is deployed in Heroku.

## Author
Mariana Bromfield

## App Link
https://secure-meadow-24027.herokuapp.com/
