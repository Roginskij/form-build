app.directive('fbCreate', ['$rootScope', function($rootScope){
    return {
        restrict: 'E',
        scope: {
            json: '='
        },
        templateUrl: './js/template/fbTemplate.html',
        link: fbCreate,
        controller: 'fbCtrl'
    };
    
    function fbCreate(scope){
        scope.data = JSON.parse(scope.json);
        scope.$watch('json', function(){
            scope.data = JSON.parse(scope.json);
        })
        console.log
        
//        if(scope.json){
//            scope.data = JSON.parse(scope.json);
//            scope.$watch('json', function(){
//                scope.data = JSON.parse(scope.json);
//            })
//        }
        scope.removeComponent = function(index){
            var data = JSON.parse($rootScope.exempleJson);
            data.components.splice(index, 1);
            $rootScope.exempleJson = JSON.stringify(data);
        }
        scope.setPage = function(index){
            scope.showPage = index;
        }
        
        
    /// Manipuate with pages
        
        scope.nextPage = function(){
            var data = JSON.parse($rootScope.exempleJson2);
            if(data.pages.length - 1 != scope.showPage ){
                scope.showPage++;
            }
        }
        scope.prevPage = function(){
            var data = JSON.parse($rootScope.exempleJson2);
            if(scope.showPage != 0){
                scope.showPage--;
            }
        }
        scope.showPage = 0;
        
    /// ---
        
        
    };
    
}])