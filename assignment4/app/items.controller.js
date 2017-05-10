(function() {
function CategoryInfoController(MenuDataService, $stateParams) {
  var vm = this;
  vm.name = $stateParams.categoryShortName;
  vm.items = [];

  MenuDataService
    .getItemsForCategory(vm.name)
    .then(function(items) {
      vm.items = items;
    });
}
CategoryInfoController.$inject = ['MenuDataService', '$stateParams'];

angular.module('MenuApp')
  .controller('CategoryInfoController', CategoryInfoController);
})();
