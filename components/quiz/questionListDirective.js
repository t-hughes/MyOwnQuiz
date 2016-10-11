var app = angular.module('quizApp');

app.directive('questionList', function(){
  return {
    scope: {
      questions: '=',
      answers: '=',
      results: '=',
      currentQuestion: '=',
      setCurrentQuestion: '&'
    },
    templateUrl: 'components/quiz/partials/quizListView.html'
  };
});
