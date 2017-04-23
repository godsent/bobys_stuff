(function() {
  function ShoppingList() {
    this.itemsToBuy = [
      { name: 'roses', quantity: 5 },
      { name: 'bottles of wine', quantity: 1 },
      { name: 'boxes of candies', quantity: 1},
      { name: 'candles', quantity: 2 },
      { name: 'bottles of massage oil', quantity: 1 },
      { name: 'condoms', quantity: 3 }
    ];

    this.boughtItems = [];

    this.buy = function(index) {
      this.addItemToBought(index);
      this.removeItemFromToBuy(index);
    };

    this.addItemToBought = function(index) {
      this.boughtItems.push(this.itemsToBuy[index]);
    };

    this.removeItemFromToBuy = function(index) {
      this.itemsToBuy.splice(index, 1);
    };

    this.isAnyToBuy = function() {
      return this.itemsToBuy.length > 0;
    };

    this.isAnyBought = function() {
      return this.boughtItems.length > 0;
    };
  }

  function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.itemsToBuy;
    this.buy = ShoppingListCheckOffService
      .buy.bind(ShoppingListCheckOffService);
    this.isAnyItem = ShoppingListCheckOffService
      .isAnyToBuy.bind(ShoppingListCheckOffService);
  }
  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.boughtItems;
    this.isAnyItem = ShoppingListCheckOffService
      .isAnyBought.bind(ShoppingListCheckOffService);
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingList);
})()
