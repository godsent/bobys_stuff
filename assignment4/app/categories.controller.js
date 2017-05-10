(function() {
function CategoriesController(MenuDataService) {
  var vm = this;
  vm.categories = [];

  MenuDataService
    .getAllCategories()
    .then(function(categories) {
      vm.categories = categories;
    });
}
CategoriesController.$inject = ['MenuDataService'];

angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);
})();
