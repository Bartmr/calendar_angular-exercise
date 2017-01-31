angular.module('appServices',[])
.factory('meetingsPersistence', function($localStorage){

    this.meetingsBuffer = [];

    if(!$localStorage.meetingsPersisted){
        this.meetingsBuffer = [];
    }
    else{
        this.meetingsBuffer = $localStorage.meetingsPersisted;
    }

    this.pushMeeting = function (meeting){
        this.meetingsBuffer.push(meeting);
        $localStorage.meetingsPersisted = this.meetingsBuffer;
    }

    return this;

});