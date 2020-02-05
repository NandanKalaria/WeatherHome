app.controller("sharedCity", function($scope, $routeParams, $http, $location, $window) {
  $scope.username = $routeParams.username;

  $scope.sharedCities = [];

  $http({
    method: "GET",
    url: `http://localhost:3000/users?firstName=${$window.sessionStorage.uname}`
  }).then(
    function mySuccess(response) {
      $scope.shared = response.data[0].shared;
      $scope.shared.forEach(element => {
        console.log(element);
        $http({
          method: "GET",
          url: `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=4726981a49612e861cd023fbe81eb99d`
        }).then(
          function mySuccess(response) {
            var City={name:"", icon:"", temp:"", min:"", max:""}
            City.name=response.data.name;
            City.icon=response.data.weather[0].main;
            City.temp=parseInt(response.data.main.temp)-273;
            City.min=parseInt(response.data.main.temp_min)-273;
            City.max=parseInt(response.data.main.temp_max)-273;
          
            $scope.sharedCities.push(City);

            console.log(City);
            
          },
          function myError(response) {
            $scope.myWelcome = response.statusText;
          }
        );
      });
    },
    function myError(response) {
      $scope.myWelcome = response.statusText;
    }
  );
});
