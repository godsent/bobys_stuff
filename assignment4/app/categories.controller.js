(function() {
function CategoriesController(categories) {
  this.categories = categories;
}
CategoriesController.$inject = ['categories'];

angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);
})();
