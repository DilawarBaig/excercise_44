"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log("Order List");
    console.log("Bread: " + items[0]);
    console.log("Meat: " + items[1]);
    console.log("cheese: " + items[2]);
    console.log("sauce: " + items[3]);
    console.log("veggies: " + items.slice(4).join(', '));
    console.log("Enjoy Your Meal!\n");
}
sandwich("Italian White", "BBQ Chicken", "Cheddar", "Chipotle");
sandwich("Garlic Bread", "Roast Beef", "Pepperjack", "Honey Mustard");
sandwich("Wheat", "Ham", "American Cheese", " ", "Tomato");
sandwich("Roasted Bread", "BBQ chicken", " ", "BBQ Sauce", "Lettuce", "Tomato", "Onion Rings");
