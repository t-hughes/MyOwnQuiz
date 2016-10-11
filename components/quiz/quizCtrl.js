var app = angular.module('quizApp');

app.controller('QuizCtrl', function($scope, quizService, $stateParams, questions){
  $scope.quizName = $stateParams.quizName;
  $scope.questions = questions;
  $scope.answers = {};
  $scope.results = {};
  $scope.currentQuestion = $scope.questions[0];

//Sets the $scope.currentQuestion to the next question if there is one
  $scope.nextQuestion = function(){
    var index = $scope.questions.indexOf($scope.currentQuestion);
    if($scope.questions[index + 1]) {
      $scope.currentQuestion = $scope.questions[index + 1];
    } else {
      return;
    }
  };

//Sets the $scope.currentQuestion to a passed in question
  $scope.setCurrentQuestion = function(question){
    $scope.currentQuestion = question;
  };

//calls a checkMyAnswers function on the service and passes in our questions and our answers. This will receive a promise from the service. It then sets $scope.results equal to the response of the promise.
  $scope.checkMyAnswers = function() {
    quizService.checkMyAnswers($scope.questions, $scope.answers).then(function(response){
      $scope.results = response;
    });
  };

//sets the answers array to a new empty object and resets the current question to the first question in the questions array
  $scope.reset = function() {
    $scope.answers = {};
    $scope.currentQuestion = $scope.quesitons[0];
  };

//Adds an answer to the answers object and moves to the next question. If it's the last question it checks for correctness.

  $scope.saveAnswer = function(id, answer) {
    $scope.answers[id] = answer;
    $scope.nextQuestion();

    if($scope.results.done) {
      $scope.checkMyAnswers();
    }
  };

//
  $scope.handleEnter = function(event, answer) {
    if (event.keyCode === 13) {
            $scope.saveAnswer(answer);
        }
  };

//Invoked anytime the user clicks a radio button. It needs to store the result on $scope.selected
  $scope.update = function(choice) {
    $scope.selected = choice;
  };

});
