angular.module('appDirectives',[])
  .directive('viewMeetings', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/view-meetings.html',
/*      controller: 'viewMeetingsController',
      controllerAs: 'viewMeetingsTableCtrl'*/
    }
  })
  .directive('insertMeetings', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/insert-meetings.html',
      controller: 'insertMeetingsController',
      controllerAs: 'insertMeetingsCtrl'
    }
  });