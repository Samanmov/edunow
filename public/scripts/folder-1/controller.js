angular.module('weekWeeks').controller('myController', function($scope,weekService) {

	weekService.loadData(function(response) {
		$scope.weekPlan = response; // weekPlan is whole response. 
	});
	
	$scope.postSearch = function(){
		//console.log($scope.weekPlan);
		console.log($scope.search);
		weekService.searchWeek($scope.search, function(response){
			$scope.searchPlan = response;
			console.log($scope.searchPlan);
		});

	}
	// add the new weeks 
	
	$scope.addWeek = function(){	
		//var Week = []; 
		var create = { CourseInfo:$scope.CourseInfo, Weeks: [ { week: $scope.week, intro: $scope.intro, text: $scope.text, question: $scope.question, answer: $scope.answer, title: $scope.title, definition: $scope.definition }]
					
					};
		$scope.weekPlan.push(create);// $scope. weekplan that is whole response will push(add) the new week
		$scope.CourseInfo = "";
		$scope.week = "";    
		$scope.intro = "";
		$scope.text = "";
		$scope.question = "";
		$scope.answer = "";
		$scope.title= "";
		$scope.definition = "";
		weekService.createWeek(create); 
	}
	//delete the week that find by id and delete from 
	$scope.deleteWeek = function(d){
		var removed = $scope.weekPlan.splice(d,1);
		//console.log(removed[0]._id);
		weekService.weekDelete(removed[0]._id);
	}
	$scope.deleteWeeks = function(e){
		var Weeks = [];
		var remove = $scope.weekPlan.Weeks.splice(e, 1);
		weekService.weekDelete(remove[0]._id);
	}



	$scope.editWeek = function(i){
		//console.log($scope.weekPlan[i]);
		$scope.weekPlan[i].editRubrik = false;
		
	
		console.log($scope.weekPlan[i]);
		// save in database
		weekService.updateWeek($scope.weekPlan[i]);
	}
	$scope.edit = function(pi, i){
		//console.log($scope.weekPlan[i]);
		//$scope.weekPlan[pi].editTitle = false;
		$scope.weekPlan[pi].Weeks[i].weekEdit = false;
		$scope.weekPlan[pi].Weeks[i].editIntro = false;
		$scope.weekPlan[pi].Weeks[i].editText = false;
		$scope.weekPlan[pi].Weeks[i].editQuestion = false;
		$scope.weekPlan[pi].Weeks[i].editAnswer = false;
		$scope.weekPlan[pi].Weeks[i].editTitle = false;
		$scope.weekPlan[pi].Weeks[i].editDefinition = false;
	
		console.log($scope.weekPlan[i]);
		// save in database
		weekService.updateWeek($scope.weekPlan[i]);
	}
});

angular.module('weekWeeks').service('weekService', function ($http) {
	// load all the weeks
	this.loadData = function(callback) {
		$http({
			method: 'GET',
			url: '/api/'
		}).then(function successCallback(response) {
			//console.log(response.data);
		    callback(response.data.weeks);
		}, function errorCallback(response) {
		});
	}
	// send the new weeks till api.
	this.createWeek = function(data){
		//var data = {'test':'test'};
		$http.post('/api/', data);
	}

	this.weekDelete = function(data){
		$http.delete('/api/' + data);
	}
	this.updateWeek = function(week){
		console.log("hit?");
		$http.put('/api/' + week._id, week);
	}
	this.searchWeek = function(data, callback){
		$http({
			method: 'GET',
			url: '/api/search/' + data
		}).then(function successCallback(response){
			//console.log(response.data);
			callback(response.data.weeks);
		}, function errorCallback(response) {	
		});
	}

	//this.searchWeek = function(week){
		//console.log("search");
	//	$http.get('/api/search/'+ week);
		//'/api/search/'
	//}
 
});
