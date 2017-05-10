(function() {
angular.module('MenuApp')
  .component('items', {
    templateUrl: 'app/categories/templates/items.html',
    bindings: {
      items: '<'
    }
  });
})();
