var app = require('app');
var moment = require('moment');
app.controller('PostCtrl', ['$scope', 'QueryService', '$timeout', function ($scope, QueryService, $timeout) {

    $scope.posts = [];

    $scope.limit = 3;
    $scope.infoHeader = "";
    $scope.infoDescription ="";

    $scope.showDeletePassInfo = false;
    $scope.loadMore = function () {
        $scope.limit = $scope.limit + 1;
    };


    $scope.run = function () {
        QueryService.getInfo().then(function (response) {
            $scope.infoHeader = response.data.infoHeader;
            $scope.infoDescription = response.data.infoDescription;
            $scope.pictureUrl = response.data.pictureUrl;
        });

        QueryService.getMixes().then(function (response) {
            $scope.posts = response.data;
        });

    };

    $scope.getDate = function (date) {
        return moment().format("MM/DD/YY", date);
    };


    $scope.deletePost = function (post, password) {
        var theRequest = {
            "password": password,
            "_id": post._id
        };

        QueryService.deletePost(theRequest).then(function (data) {
            $scope.run();
            window.alert("Song successfully deleted");
            console.log(data);
        }, function (err) {
            window.alert("You are doing something you shouldn't aren't you?");
        });
    };

    $scope.editInfo = function (password) {
        var theRequest = {
            "password": password,
            "infoHeader": $scope.infoHeader,
            "infoDescription": $scope.infoDescription,
            "pictureUrl" : $scope.pictureUrl
        };

        QueryService.publishNewInfo(theRequest).then(function (data) {
            window.alert("Info changed");
            console.log(data);
            $scope.showDeletePassInfo = false;
        }, function (err) {
            window.alert("You are doing something you shouldn't aren't you?");
        });
    };

}]);
