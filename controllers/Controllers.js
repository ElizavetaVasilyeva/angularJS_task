angular.module('Controllers', [])
.controller('repositoryController', ['$scope','Repository', 'StoreData',
function($scope,Repository,StoreData) {
	$scope.loaded=false;
	$scope.sortparam='full_name';
	$scope.limit=10;
	$scope.filt='';
	$scope.size=10000;
	$scope.forks=0;
	$scope.stars=0;
	$scope.sor='';
	$scope.repositories=StoreData.get();
	$scope.query=function(){
	$scope.loaded=true;
	var lineQuery=" stars:>="+$scope.stars+" size:<="+$scope.size+" forks:>="+$scope.forks;
	Repository.get({q: lineQuery},
	function(data)
	{
	$scope.repositories=data.items;
	StoreData.set(data.items);
	$scope.loaded=false;
	})
}; 
}])
.controller('RepoViewController',['$scope','$stateParams','Repository','StoreData','Contributors',
function($scope,$stateParams,Repository,StoreData,Contributors){
$scope.repo=function(){
var repo=StoreData.getById($stateParams.id);	
var query=repo.contributors_url;	
var i=query.split('/');
$scope.contributors=Contributors.query({name1:i[4],name2:i[5]});
return repo;
}();
}])