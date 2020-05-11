( function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function (itemIndex) {
        var name =  toBuy.toBuyItems[itemIndex].name;
        var quantity =  toBuy.toBuyItems[itemIndex].quantity;
        
        ShoppingListCheckOffService.addToboughtItem(name, quantity);
        ShoppingListCheckOffService.removeFromToBuy(itemIndex);
    };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    bought.boughtItems = ShoppingListCheckOffService.getBoughtImems();

}

function ShoppingListCheckOffService(){
    var service = this;

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
            name: "Tea",
            quantity: "3"
          },
          {
            name: "Coffee",
            quantity: "7"
          }

    ];
    var boughtItems = [];

    service.addToboughtItem = function(itemName, itemQuantity) {
        var item = {
            name: itemName,
            quantity: itemQuantity
        };
        boughtItems.push(item);
    };

    service.removeFromToBuy = function (itemIndex) {
        toBuyItems.splice(itemIndex, 1);
    };

    service.getBoughtImems = function() {
        return boughtItems;
    };

    service.getToBuyItems = function() {
        return toBuyItems;
    };
}

})();