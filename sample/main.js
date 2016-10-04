/*
 * Other JSON resources:
 *  - http://beta.json-generator.com/
 *  - http://jsbeautifier.org/
 *  - http://jsonlint.com/
 */

angular.module('jsonTreeDemo', ['angular-json-tree'])
	.controller('DemoCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.json = {};
		$scope.json.string = "{\"id\":\"ltng:interaction\",\"ts\":85090.87,\"pageStartTime\":1471447794678,\"unixTS\":false,\"eventType\":\"user\",\"eventSource\":\"click\",\"attributes\":{\"auraAction\":\"one$appNavBarItem$controller$onClick\"},\"sequence\":1,\"locator\":{\"context\":{\"devNameOrId\":\"Lead\"},\"target\":\"tab-item\",\"scope\":\"global-app-nav\"},\"page\":{\"context\":\"home:landing\",\"attributes\":{\"url\":\"/\"}}}";
		$scope.json.object = JSON.parse($scope.json.string);
	}]);