var myApp=angular.module('myApp',['ui.router','ngResource','Controllers','Services','Directives']);
myApp.config(function($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise('/repositories');
$stateProvider.state('allRepositories',{
url:'/repositories',
templateUrl: 'partials/repository.html',
controller:'repositoryController'
}).state('viewRepository',{
url:'/repositories/:id',
templateUrl: 'partials/repositoryDetails.html',
controller:'RepoViewController'
});
}).run(function($state){
$state.go('allRepositories');
});
