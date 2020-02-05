var app = angular
  .module("Weather", ["ngRoute", "ngMaterial", "ngMessages"])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.caseInsensitiveMatch = true;

    $routeProvider

      .when("/", {
        templateUrl: "client/views/loginpage.html"
        //controller: "loginController"
      })
      .when("/register", {
        templateUrl: "client/views/signup.html"
        // controller: "registerController"
      })

      .when("/users/:username/addCity", {
        templateUrl: "client/views/add-city.html",
        controller: "addCity"
      })

      .when("/users/:username", {
        templateUrl: "client/views/dashboard.html",
        controller: "dashboard"
      })

      .when("/users/:username/sharedCities", {
        templateUrl: "client/views/shared-city.html",
        controller: "sharedCity"
      })

      .otherwise({
        redirectTo: "/"
      });
  });