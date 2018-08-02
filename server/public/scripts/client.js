console.log('js czeck');

var app = angular.module('TaskApp', []);

app.controller('TaskController', ['$http', function ($http) {
    console.log('taskcontroller czeck');

    var self = this;

    self.newTask = {
        name: '',
        complete: false
    }
    self.taskList = [];

    self.getAllTasks = function () {
        $http({
            method: 'GET',
            url: '/tasks'
        })
            .then(function (response) {
                self.taskList = response.data;
            })
            .catch(function (error) {
                console.log('error on /tasks GET', error);
            });
    }

    self.postTask = function () {
        $http({
            method: 'POST',
            url: '/tasks',
            data: self.newTask
        })
            .then(function (response) {
                console.log('response from post', response);
                self.getAllTasks();
            })
            .catch(function (error) {
                console.log('error on /tasks POST', error);
            });
    }

    self.deleteTask = function (taskToDelete) {
        console.log(taskToDelete);

        if (confirm("It's really just the age we live in, isn't it? Take a pill and forget your problems.")) {
            //look up 'modal' on bootstrap
            $http({
                method: 'DELETE',
                url: '/tasks',
                params: taskToDelete
            })
                .then(function (response) {
                    console.log('response from delete', response);
                    self.getAllTasks();
                })
                .catch(function (error) {
                    console.log('error on /tasks DELETE', error);
                });
        }
        else{
            console.log('do NOT delete');
        }
    }


    self.updateTask = function (taskToUpdate) {
        taskToUpdate.complete = !taskToUpdate.complete;
        console.log(taskToUpdate);
        $http({
            method: 'PUT',
            url: '/tasks',
            data: taskToUpdate
        })
            .then(function (response) {
                console.log('response from put', response);
                self.getAllTasks();
            })
            .catch(function (error) {
                console.log('error on /tasks PUT', error);
            })
    }




    //put function

    self.getAllTasks();

}]);