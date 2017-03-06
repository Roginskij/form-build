app.directive('fbCreate', ['$rootScope', 'fbTemplate', function($rootScope, fbTemplate){
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
            scope.data = JSON.parse($rootScope.exempleJson);
            console.log(scope.data)
//            for(var i = 0; i < scope.data.components.length; i++){
//                if(scope.data.components[i].type == 'text'){
//                    console.log(fbTemplate.inputText)
//                    console.log(scope.data.components[i])
//                }
//            }
        })
        
        
        
    };
    
}])