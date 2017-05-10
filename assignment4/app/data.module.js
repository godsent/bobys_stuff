(function() {
angular.module('Data', [])
  .constant('INDEX_URL', 'https://davids-restaurant.herokuapp.com/categories.json')
  .constant('SHOW_URL', 'https://davids-restaurant.herokuapp.com/menu_items.json');
})();
