angular.module('appControllers', [])
    .controller('mainController', function($rootScope){



    })
    .controller('insertMeetingsController', function ($scope, meetingsPersistence) {
        
        $scope.submit = function () {
            if($scope.meeting.end === undefined || $scope.meeting.end === null){
                $scope.meeting.end=$scope.meeting.start;
            }

            $scope.meeting.startDateObject = new Date($scope.meeting.start);
            $scope.meeting.endDateObject = new Date($scope.meeting.end);
            
            meetingsPersistence.pushMeeting($scope.meeting);
            $scope.meeting = undefined;

            $scope.meetingForm.$setPristine();
            $scope.meetingForm.$setUntouched();
           
        };

    })
    .controller('viewMeetingsController', function($scope, meetingsPersistence){

        $scope.meetingsList = meetingsPersistence.meetingsBuffer


    });