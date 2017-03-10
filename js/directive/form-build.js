app.directive('formBuild', ['$rootScope', function($rootScope){
    return {
        restrict: 'E',
        scope: {},
        templateUrl: './js/template/form-build.html',
        link: formBuild,
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
        scope.selectTypeForm = scope.selectForm[0].value;
        $rootScope.form = {
            formName: 'testForm',
            components: [],
        };
        $rootScope.$watch('form', function(){
            scope.dataJson = $rootScope.form;
        })
        scope.changeTypeForm = function(){
            if(scope.selectTypeForm == 'simpleForm'){
                $rootScope.form = {
                    formName: 'testForm',
                    components: [],
                };
                scope.dataJson = $rootScope.form;
            } 
            if( scope.selectTypeForm == 'pagesForm' ) {
                $rootScope.form = {
                    formName: 'testPagesForm',
                    pages: [{components: []}],
                };
                scope.dataJson = $rootScope.form;
            }
        }
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
//        scope.dateType = {
//            type: 'date',
//            required: false,
//            date: new Date(),
//            label: '',
//        }
    /// ---
        
    /// Monipulate with pages
        scope.showPage = 0;
        scope.addPage = function(){
            scope.dataJson.pages.push({components: []});
            $rootScope.form = scope.dataJson;
        }
        scope.removePage = function(){
            scope.dataJson.pages.pop();
            $rootScope.form = scope.dataJson;
        }
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
    /// ---
        
    /// Add & remove component to form
        scope.removeComponent = function(index){
            if(scope.selectTypeForm == 'pagesForm'){
                scope.dataJson.pages[scope.showPage].components.splice(index, 1);
                $rootScope.form = scope.dataJson;
            } else {
                scope.dataJson.components.splice(index, 1);
                $rootScope.form = scope.dataJson;
            }
        }
        scope.addComponent = function(object){
            console.log(scope.dataJson)
            if(scope.selectTypeForm == 'pagesForm'){
                scope.dataJson.pages[scope.showPage].components.push(object);
                $rootScope.form = scope.dataJson;
            } else {
                scope.dataJson.components.push(object);
                $rootScope.form = scope.dataJson;
            }
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