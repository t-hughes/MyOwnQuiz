var app = angular.module('quizApp');

app.directive('multipleChoice', function(){
  return {
    restrict: 'AE',
    replace: 'true',
    scope: {
        question: '=',
        save: '&',
        answers: '='
    },
    templateUrl: 'components/quiz/partials/multipleChoiceTmpl.html',
    controller: function($scope, $attrs){
      $scope.$watch('question', function(){
        $scope.selected = '';
      });

      $scope.update = function(choice) {
        if(choice) {
          $scope.selected = choice;
        }
      };
      
      $scope.saveAnswer = function(selected) {
        $scope.save({id: $scope.question.id, answer: selected});
      };
    }
  };
});
