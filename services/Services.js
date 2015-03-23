angular.module('Services',['ngResource'])
.factory('Repository',['$resource',
function($resource){
return $resource('https://api.github.com/search/repositories');
}])
.factory('Contributors',['$resource',
function($resource){
return $resource('http://api.github.com/repos/:name1/:name2/contributors');
}])
.factory('StoreData',function($window,Repository){
var repos=[];
var service={};
service.set=function(data){
repos=data;
}
service.get=function(){
return repos;
}
service.getById=function(id){
var repo=null;
angular.forEach(repos, function(value) {
		if(parseInt(value.id) === parseInt(id)) 
		{
		repo=value;
		return false;
		}
        });
return repo;		
}
return service;
});
