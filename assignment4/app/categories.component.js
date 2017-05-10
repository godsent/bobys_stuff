(function() {
angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'app/categories/templates/categories.html',
    bindings: {
      categories: '<'
    }
  });
})();
