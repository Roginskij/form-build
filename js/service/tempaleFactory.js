app.factory('fbTemplate', [function(){
    return {
        inputText: '<input type="text" class="form-control" placeholder="{{ textInput.placeholder }}" ng-required="textInput.required">'
    }
}])