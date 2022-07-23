/* JS130 - JavaScript Exercises > Closures, Private Data, and IIFEs > Mini Inventory Management System

Mini Inventory Management System

In this exercise, you'll build a simple inventory management system. The system is composed of an item creator, an items manager, and a reports manager. The item creator makes sure that all necessary information are present and valid. The item manager is responsible for creating items, updating information about items, deleting items, and querying information about the items. Finally, the report manager generates reports for a specific item or ALL items. Reports for specific items are generated from report objects created from the report manager. The report manager is responsible for reports for all items.

Component Specifications

Here's all the required information for an item:

1. SKU code: This is the unique identifier for a product. It consists of the first 3 letters of the item and the first 2 letters of the category. If the item name consists of two words and the first word consists of two letters only, the next letter is taken from the next word.

2. Item name: This is the name of the item. It must consist of a minimum of 5 characters. Spaces are not counted as characters.

3. Category: This is the category that the item belongs to. It must consist of a minimum of 5 characters and be only one word.

4. Quantity: This is the quantity in stock of an item. This must not be blank. You may assume that a valid number will be provided.

The following are the methods that the items manager can perform:

1. `create`: This method creates a new item. Returns false if creation is not successful.

2. `update`: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.

3. `delete`: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.

4. `items`: This property contains a list of all the items.

5. `inStock`: This method list all the items that have a quantity greater than 0.

6. `itemsInCategory`: This method list all the items for a given category

The following are the methods on the reports managers:

1. `init`: This method accepts the `ItemManager` object as an argument and assigns it to the `items` property.

2. `createReporter`: This method accepts an SKU code as an argument and returns an object.
  - The returned object has one method, `itemInfo`. It logs to the console all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from` Object.prototype`).

3. `reportInStock`: Logs to the console the item names of all the items that are in stock as a comma separated values.

Notes:

- There's no need to add the ability to validate the uniqueness of the SKU code. Given the current description, it's possible that a duplicate will exist.
- Each required piece of information for an item corresponds to one property.
- If any of the require information provided is not valid, the item creator returns an object with a `notValid` property with a value of `true`.
- The created item objects should not have any methods/properties on them other than the required information above and those inherited from `Object.prototype`.
- You may add methods to the item manager as you deem necessary. */

// Solution
let ItemCreator = (function () {
  function generateSkuCode(itemName, category) {
    return (
      itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() +
      category.replace(/\s/g, '').slice(0, 2).toUpperCase()
    );
  }

  function isValidItemName(itemName) {
    return itemName.replace(/\s/g, '').length >= 5;
  }

  function isValidCategory(category) {
    return (
      category.replace(/\s/g, '').length >= 5 &&
      category.split(' ').length === 1
    );
  }

  function isQuantityProvided(quantity) {
    return quantity !== undefined;
  }

  return function (itemName, category, quantity) {
    if (
      isValidItemName(itemName) &&
      isValidCategory(category) &&
      isQuantityProvided(quantity)
    ) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],
  getItem: function (skuCode) {
    return this.items.filter(function (item) {
      return item.skuCode === skuCode;
    })[0];
  },

  create: function (itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update: function (skuCode, itemInformation) {
    Object.assign(this.getItem(skuCode), itemInformation);
  },

  delete: function (skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  list: function () {
    return this.items;
  },

  inStock: function () {
    return this.items.filter(function (item) {
      return item.quantity > 0;
    });
  },

  itemsInCategory: function (category) {
    return this.items.filter(function (item) {
      return item.category === category;
    });
  },
};

let ReportManager = {
  init: function (itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    const item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        Object.keys(item).forEach((key) => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    };
  },

  reportInStock: function () {
    console.log(
      this.items
        .inStock()
        .map(function (item) {
          return item.itemName;
        })
        .join(',')
    );
  },
};

// Here is a sample run that you can use a reference:
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

/* Discussion

The key take-away for this exercise is practicing creating and using objects that interact or collaborate with each other. The notable parts of the solution are the following:

- Using a constructor function that has private methods.
- Having an explicit return value for a constructor function.
- Maintaining a reference to an object using closures (i.e., `createReporter` method of `ReportManager`).
 */