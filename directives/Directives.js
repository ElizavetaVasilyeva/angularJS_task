angular.module('Directives', [])
.directive('searchForm', function(){
return {
restrict: "E",
templateUrl: "templates/searchForm.html",
}
})
.directive('detailsRepository', function(){
return {
restrict: "E",
scope:{
repo:'=',
contributors:'='
},
templateUrl: "templates/detailsRepositTemplate.html",
}
})
.directive('myReposit', function(){
return {
restrict: "E",
scope: {
item: '=source'
},
templateUrl:"templates/repositoryTemplate.html" 
}
})