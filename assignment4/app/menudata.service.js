(function() {
function MenuDataService($http, INDEX_URL, SHOW_URL) {
  this.getAllCategories = function() {
    return $http({
        url: INDEX_URL,
        method: 'GET'
      })
      .then(function(response) {
        return response.data;
      });
  };

  this.getItemsForCategory = function(categoryShortName) {
    return $http({
        url: SHOW_URL,
        method: 'GET',
        params: { category: categoryShortName }
      })
      .then(function(response) {
        console.log(response.data.menu_items);
        return response.data.menu_items;
      });
  };
}
MenuDataService.$inject = ['$http', 'INDEX_URL', 'SHOW_URL'];

angular.module('Data')
  .service('MenuDataService', MenuDataService);
})();
