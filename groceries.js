// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products	
// This document has been modified from Caroline Barriere's initial file

var products = [
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Grapes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "Lemon",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.59
	},
	{
		name: "Sweet Potato",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49
	},
	{
		name: "Green Beans",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.59
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.69
	},
	{
		name: "Cheddar Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.25
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.99
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.55
	},
	{
		name: "Muffin",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.15
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.59
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 11.49
	},
	{
		name: "Ground Beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.99
	},
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_info = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_info.push(prods[i].name + ": " + prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_info.push(prods[i].name + ": " + prods[i].price);
		}
		else if ((restriction == "Both") && (prods[i].glutenFree == true) 
			&& (prods[i].vegetarian == true)){
			product_info.push(prods[i].name + ": " + prods[i].price);
		}
		else if (restriction == "None"){
			product_info.push(prods[i].name + ": " + prods[i].price);
		}
	}
	return product_info;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		if (chosenProducts.indexOf(chosenProducts[i].name) > -1){
			totalPrice += chosenProducts[i].price;
		}
	}
	return totalPrice;
}
