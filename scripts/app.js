(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var showToBuy = this;

    showToBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    showToBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

    showToBuy.isEmpty = function () {
      return showToBuy.toBuyItems.length == 0;
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showBought = this;

    showBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

    showBought.isEmpty = function () {
      return showBought.boughtItems.length == 0;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // initialize arrays
    var toBuyItems = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Pepto Bismol",
        quantity: "2"
      }
    ];
    var boughtItems = [];

    service.buyItem = function (itemIndex) {
      // retrieve item from toBuyItems list
      var item = toBuyItems[itemIndex];

      // add to alreadyBoughtItems list, remove from toBuyItems list
      boughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };

    // retrieve list of items to buy
    service.getToBuyItems = function () {
      return toBuyItems;
    };

    // retrieve list of bought items
    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
})();
