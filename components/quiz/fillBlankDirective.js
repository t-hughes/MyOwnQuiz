var app = angular.module('quizApp');

app.directive('fillBlank', function(){
  return {
    restrict: 'AE',
    replace: 'true',
    scope: {
        question: '=',
        save: '&',
        answers: '='
    },
    templateUrl: 'components/quiz/partials/fillBlankTmpl.html',
    controller: function($scope) {
      $scope.$watch('question', function(){
        if($scope.answers[$scope.question.id]) {
          $scope.answer = $scope.answers[$scope.question.id];
        } else {
          $scope.answer = '';
        }
      });

      $scope.saveAnswer = function(answer) {
        $scope.save({id: $scope.question.id, answer: answer});
      };

      $scope.handleEnter = function(e, answer) {
        if (e.keyCode === 13) {
          $cope.saveAnswer(answer);
        }
      };
    }
  };
});
