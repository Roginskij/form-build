app.directive('fbCreate', ['$rootScope', function($rootScope){
    return {
        restrict: 'E',
        scope: {
            json: '='
        },
        templateUrl: './js/template/fbTemplate.html',
        link: fbCreate,
//        controller: 'fbCtrl'
    };
    
    function fbCreate(scope){
    
    /// Get JSON from controller
        if(scope.json){
            scope.data = JSON.parse(scope.json);
            scope.$watch('json', function(){
                scope.data = JSON.parse(scope.json);
            })
        }
    /// ---
        
        $rootScope.$watch('form', function(){
            scope.data = $rootScope.form;
        })
        
        scope.showPage = 0;
        scope.setPage = function(index){
            scope.showPage = index;
        }
        scope.nextPage = function(){
            if(scope.dataJson.pages.length - 1 != scope.showPage ){
                scope.showPage++;
            }
        }
        scope.prevPage = function(){
            if(scope.showPage != 0){
                scope.showPage--;
            }
        }
        
    };
    
}])