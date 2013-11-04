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

app.filter('filterdotname', function()
{
	return function(input)
	{
		return input.split('.')[0];
	};
});

app.factory('mySessionService', function($rootScope)
{
	var service = {};

	service.data = {
		title:'My Kraigs List',
		search_data:[]
	};

	service.getData = function()
	{
		return this.data;
	};

	service.getSearchData = function()
	{
		return this.getData().search_data;
	};

	service.emptySearch = function()
	{
		this.updateSearch([]);
	}

	service.updateSearch = function(data)
	{
		this.getData().search_data = data;
		this.broadcastItem();
	};

	service.broadcastItem = function()
	{
		$rootScope.$broadcast('updateSearch');
	};

	return service;
});

app.controller('headerCtrlr',[
	'$scope', '$location', 'mySessionService',
		function($scope, $location, mySessionService)
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
				mySessionService.getData().site = $scope.site;
				mySessionService.getData().title = $scope.title;
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
	'$scope','$http','mySessionService',
		function($scope, $http, mySessionService)
		{
			var self = this;

			var loader = new CanvasLoader('canvasloader-container');
			loader.setColor('#525252'); // default is '#000000'
			loader.setDiameter(84); // default is 40
			loader.setDensity(90); // default is 40
			loader.setRange(0.8); // default is 1.3
			loader.setSpeed(4); // default is 2
			loader.setFPS(38); // default is 24
			loader.hide(); // Hidden by default

			$scope.isLoaded = false;
			$scope.form = {
				site:mySessionService.getData().site
			};

			$http
				.post('/sites/data',{
					site:mySessionService.getData().site
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
					mySessionService.emptySearch();
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

			$scope.totalAreas = function()
			{
				return _.where($scope.area_list,{
					selected:true
				}).length;
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
				mySessionService.emptySearch();

				self._setDefaults();
				loader.show();

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
					loader.hide();
					mySessionService.updateSearch(json);
				});
			};
		}
]);

app.controller('contentCtrlr',[
	'$scope','mySessionService',
		function($scope, mySessionService)
		{
			$scope.$on('updateSearch', function()
			{
				console.log('updating');
				$scope.results = mySessionService.getSearchData();
				if($scope.results.length)
				{
					$scope.isRendered = true;
				}
				else
				{
					$scope.isRendered = false;
				}
				console.log($scope);
			});
		}]);
