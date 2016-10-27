   
            angular.module('ToDo',[]).
            controller('todoController',['$scope',function($scope){
                $scope.todos = [
                    {'title':'Build a todo list','done': false}
                ];
                
       
				
                
                //adding functionality 
                $scope.addTodo = function(keyEvent){
                    if(keyEvent.which === 13 && $scope.newTodo.length != 0){
                $scope.todos.push({'title': $scope.newTodo,'done':false});
                $scope.newTodo = '';
                                             }
                };
                //check if its being done filteration
                function CheckIfDone(item){
                    return !item.done;
                }

                 //clear functionaliy    
                $scope.clearCompleted = function(){
                    $scope.todos = $scope.todos.filter(CheckIfDone);
                };
                //make editable
                $scope.editItem = function(todo){
                    todo.inlineEdit = true;
                };
                //after editing done
                $scope.myFunct = function(keyEvent,i,todo){
                    if(keyEvent.which === 13 ){
                        $scope.todos[i]=todo;
                        todo.inlineEdit = false;
                    };
                };
            }])
        