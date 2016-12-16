angular.module('app').controller('controller', function ($scope, service1, $q, starWarsService) {
    $scope.connected = "yes";

    $scope.theDataWeAskedFor = "Asking for the data...";





    $scope.getCp3 = function(){
      starWarsService.getCp3().then(function(res){
        $scope.c3po = res
      })
    }














    $scope.getDrPepper = function () {
        var promise = service1.getDrPepper();

        promise.then(function(whatIaskedFor){
            $scope.theDataWeAskedFor = whatIaskedFor;
        })
    }

    $scope.getDrPepper();


//CONFIG

    $scope.getLuke = function(){
        starWarsService.getLuke().then(function(result){
            $scope.luke = result;
        }, function(){

        })

    }

    function resolve(){

    }

    function reject(){

    }

    // promise.then(resolve, reject);



    $scope.getPokemon = function(){
       $scope.getPokemonFromService();
    }


//





    $scope.submitApplication = function () {
        validationService.checkAllFieldsCompleted()
            .then(creditService.creditCheck)
            .then(validationService.checkEmailIsValid)
            .then(validationService.checkAddressIsValid)
            .then(brokerService.assignBrokerBasedOnAddress, errorService.handleInvalidAddress)
            .then(loanService.calculateInterestRate)



    }



});
