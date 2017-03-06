app.controller('fbCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    
/// Test form
    $rootScope.exempleJson = JSON.stringify({
        formName: 'testForm',
        components: [],
    });
    $scope.json = $rootScope.exempleJson;
    $rootScope.$watch('exempleJson', function(){
        $scope.json = $rootScope.exempleJson;
    })
/// ---
    
}])