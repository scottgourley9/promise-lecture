angular.module('app').service('service1', function($q, $timeout,$http){
    //Basic example

    this.getDrPepper = function(){
        //Create an object that can defer
        var defer = $q.defer();

        // $http({
        //     url: 'http://Russia/tastyFood',
        //     method: 'GET'
        // }).then(function(response){
        $timeout(function(){
          defer.resolve('Here is your Dr Pepper!');
        }, 3000)

        // })

        //use the object to return a promise
        return defer.promise;
    }

});



angular.module('app').service('starWarsService', function($http, $q){

    // Config example
    var luke = null;

    this.getLuke = function(){
        var defer = $q.defer();
        if(luke){
            defer.resolve(luke);
        } else {
           $http.get('http://swapi.co/api/people/1/')
               .then(function(response){
                  luke = response.data;
                  defer.resolve(response.data);
               })
        }

        return defer.promise;
    }



    this.getCp3 = function(){
      var defer = $q.defer();

      $http({
        method: 'GET',
        url: 'http://swapi.co/api/people/2/'
      })
      .then(function(response){
        response.data.hair_color = 'Golden'
        response.data.gender = "Unknown",
        response.data.photo = 'https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png'
        defer.resolve(response.data)
      })

      return defer.promise;



    }





});
//
// angular.module('app').service('multiPointDataService', function($http, $q){
//     // Multi-data example
//
//
// });
