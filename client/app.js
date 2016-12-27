'use strict';

angular.module('wikiView', [])

  .controller('mainController', function($scope, $http, $sce) {
    $scope.results = [];
    $scope.search = function() {
      $scope.results = [];
      const title = $scope.searchText;
      const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
      const page = 'https://en.wikipedia.org/?curid=';
      const url = $sce.trustAsResourceUrl(api + title);

      $http.jsonp(url, {jsonpCallbackParam: 'callback'}).then(function(data) {
        const dataResults = data.data.query.pages;
        angular.forEach(dataResults, function(v, key) {
          $scope.results.push({title: v.title, body: v.extract, page: page + v.pageid});
        });
      });
    };
  });
