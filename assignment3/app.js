(function() {
function NarrowItDownController(NarrowFilter) {
  this.items = [];
  this.keywords = '';
  var filterer = new NarrowFilter(this);

  this.filter = function() {
    if (this.keywords.length > 0) {
      filterer.filter(this.keywords);
    } else {
      this.items = [];
    }
  };

  this.removeItem = function(index) {
    this.items.splice(index, 1);
  };
}
NarrowItDownController.inject = ['NarrowFilter'];

function Filter(NarrowRequester) {
  return function(source) {
    var allItems = [];

    NarrowRequester.index().then(function(loadedItems) {
      allItems = loadedItems;
    });

    this.filter = function(keywords) {
      filterItems(keywords);
    }

    function filterItems(keywords) {
      source.items = [];
      setNewItems(keywords);
    }

    function setNewItems(keywords) {
      for(var i = 0; i < allItems.length; i++) {
        if (withDescription(allItems[i], keywords)) {
          source.items.push(allItems[i]);
        }
      }
    }

    function withDescription(string, substring) {
      return string.description.indexOf(substring) >= 0;
    }
  }
}

function Requester($http, API_URL) {
  this.index = function() {
    return $http({ url: API_URL })
      .then(function(response) {
        return response.data.menu_items;
      });
  };
}
Requester.inject = ['$http', 'API_URL'];

function foundItemsConfig() {
  return {
    templateUrl: 'found-items.html',
    controller: 'FoundItemsController as list',
    scope: {
      items: '<',
      removeItem: '&'
    },
    bindToController: true
  }
}

function FoundItemsController() {
  this.anyItem = function() {
    return this.items.length > 0;
  }
}

angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .controller('FoundItemsController', FoundItemsController)
  .service('NarrowRequester', Requester)
  .factory('NarrowFilter', Filter)
  .directive('foundItems', foundItemsConfig)
  .constant('API_URL', 'https://davids-restaurant.herokuapp.com/menu_items.json');
})();
