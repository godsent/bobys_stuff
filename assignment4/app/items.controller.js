(function() {
function CategoryInfoController(items, name) {
  this.name = name;
  this.items = items;
}
CategoryInfoController.$inject = ['items', 'name'];

angular.module('MenuApp')
  .controller('CategoryInfoController', CategoryInfoController);
})();
