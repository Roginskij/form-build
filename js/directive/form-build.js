app.directive('formBuild', ['$rootScope', function($rootScope){
    return {
        restrict: 'E',
//        transclude: true,
        scope: {},
        templateUrl: './js/template/form-build.html',
        link: formBuild,
        controller: 'fbCtrl'
    };
    
    function formBuild(scope){
    /// Select form that you want to create
        scope.selectForm = [
            {
                optionName: 'Simple form',
                value: 'simpleForm',
            }, 
            {
                optionName: 'Pages form',
                value: 'pagesForm',
            },
        ];
        scope.selectTypeForm = scope.selectForm[0];
    /// ---
        
    /// Components for create form
        scope.textInput = {
            type: 'text',
            placeholder: '',
            required: false,
            label: '',
        }
        scope.textareaType = {
            type: 'textarea',
            placeholder: '',
            required: false,
            label: '',
        }
        scope.emailInput = {
            type: 'email',
            placeholder: '',
            required: false,
            label: '',
        },
        scope.passwordInput = {
            type: 'password',
            placeholder: '',
            required: false,
            label: '',
        },
        scope.selectType = {
            type: 'select',
            required: false,
            label: '',
            options: [
                {
                    value: '1'
                }
            ]
        },
        scope.dateType = {
            type: 'date',
            required: false,
            date: new Date(),
            label: '',
        }
    /// ---
        
    /// Add component to form
        scope.addComponent = function(object){
            var data = JSON.parse($rootScope.exempleJson);
            data.components.push(object);
            $rootScope.exempleJson = JSON.stringify(data);
//            console.log(JSON.parse($rootScope.exempleJson))
        }
    /// ---
        
    /// Clear component
        scope.clearComponent = function(data){
            if(data.placeholder){data.placeholder = ''};
            if(data.placeholder){data.date = new Date()};
            data.required = false;
            data.label = '';
        }
    /// ---
        
    };
    
}])