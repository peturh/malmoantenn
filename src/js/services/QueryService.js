var app = require('app')
app.service('QueryService',['$http','$upload', function($http,$upload){

    var QueryService = {};


    QueryService.getMixes =function() {
        return $http.get("/mixes")
            .success(function(data,status,headers,config){
                return data;
            }

        ).error(function(data,status,headers,config){
                console.log("Error",data);
            });
    };

    QueryService.getInfo = function() {
        return $http.get("/info")
            .success(function(data,status,headers,config){
                    return data;
                }

            ).error(function(data,status,headers,config){
                console.log("Error",data);
            });
    };

    QueryService.deletePost =function(theObject) {
        return $http.post("/delete",theObject)
            .success(function(data,status,headers,config){
                return data;
            }
        ).error(function(data,status,headers,config){
                return data;
            });
    };
    QueryService.publishNewInfo = function(theRequest){
        return $http.post('/newInfo',theRequest)
            .success(function(data,status,headers,config){
                return data;
            }
        ).error(function(data,status,headers,config){
            return data;
        });
    };


    return QueryService;

}]);