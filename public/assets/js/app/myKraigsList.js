var app = angular.module("myKraigsList", [
	'ngRoute',
	'ngResource'
]);

app.config([
	'$routeProvider','$locationProvider',
		function($routeProvider, $locationProvider)
		{
			var routeHandler = {
				templateUrl: 'assets/templates/sites.html',
				controller: 'pageCtrlr'
			}
			$routeProvider.
				when('/stuff', routeHandler).
				when('/jobs', routeHandler).
				when('/gigs', routeHandler).
				when('/places', routeHandler).
				when('/services', routeHandler).
				otherwise({
					redirectTo: '/'
				});
			$locationProvider.html5Mode(true)
		}
]);

app.factory('Session',function()
{
	return {
		title:'My Kraigs List',
		search_data:[]
	};
});

app.controller('headerCtrlr',[
	'$scope', '$location', 'Session',
		function($scope, $location, Session)
		{
			$scope.$on('$routeChangeStart', function(scope, next, current)
			{
				console.log($location.path());
				var path = $location.path();
				switch(true)
				{
					case /stuff/.test(path):
						$scope.site = 'stuff';
						break;
					case /jobs/.test(path):
						$scope.site = 'jobs';
						break;
					case /gigs/.test(path):
						$scope.site = 'gigs';
						break;
					case /places/.test(path):
						$scope.site = 'places';
						break;
					case /services/.test(path):
						$scope.site = 'services';
						break;
				}
				Session.site = $scope.site;
				Session.title = $scope.title;
			});

			$scope.gotoStuff = function()
			{
				$location.path('/stuff');
			};

			$scope.gotoJobs = function()
			{
				$location.path('/jobs');
			};

			$scope.gotoGigs = function()
			{
				$location.path('/gigs');
			};

			$scope.gotoPlaces = function()
			{
				$location.path('/places');
			};

			$scope.gotoServices = function()
			{
				$location.path('/services');
			};

		}
]);

app.controller('pageCtrlr',[
	'$scope','$http','Session',
		function($scope, $http, Session)
		{
			var self = this;

			$scope.isLoaded = false;
			$scope.form = {
				site:Session.site
			};

			$http
				.post('/sites/data',{
					site:Session.site
				})
				.success(function(json)
				{
					console.log(json);
					$scope.title = json.page_info.title;
					$scope.pagetitle = json.page_info.pagetitle;
					$scope.fields = json.fields;
					$scope.pagesearchexample = json.page_info.pagesearchexample;
					$scope.area_list = json.area_list;
					$scope.region_list = json.region_list;
					$scope.isLoaded = true;
					Session.search_data = [];
				});

			$scope.isAreaListOpen = false;
			$scope.isRegionListOpen = false;

			$scope.openRegions = function()
			{
				$scope.isRegionListOpen = !$scope.isRegionListOpen;
			};

			$scope.openAreas = function()
			{
				$scope.isAreaListOpen = !$scope.isAreaListOpen;
			};

			$scope.selectAreas = function(region)
			{
				console.log(region);

				region.selected = typeof region.selected === 'undefined' ? true : !region.selected;

				_.each($scope.area_list, function(obj)
				{
					if(obj.type == region.type)
						obj.selected = region.selected;
				});
			};

			self._setDefaults = function()
			{
				var areas = _.where($scope.area_list, {selected:true});
				if(!areas.length)
				{
					_.each($scope.region_list, function(obj)
					{
						if(obj.type == 'socal') obj.selected = true;
					});

					_.each($scope.area_list, function(obj)
					{
						if(obj.type == 'socal') obj.selected = true;
					});
				}
			};

			$scope.submit = function()
			{
				self._setDefaults();

				var data = _.extend({
					include: _.map(_.where($scope.area_list,{
						selected:true
					}),function(obj)
					{
						return obj.partial;
					}),
					regions: _.map(_.where($scope.region_list,{
						selected:true
					}),function(obj)
					{
						return obj.type;
					})
				}, $scope.form);

				$http({
					url:'/sites/fetch',
					method:'post',
					data:data
				})
				.success(function(json)
				{
					Session.search_data = json;
				});
			};
		}
]);

app.controller('myContentCtrlr',[
	'$scope','Session',
		function($scope, Session)
		{
			$scope.data = Session.search_data;
			if(!Session.data)
			{
				$scope.isRendered = true;
			}
			else
			{
				$scope.isRendered = false;
			}
		}]);
