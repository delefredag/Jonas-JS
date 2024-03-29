'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },

    orderDelivery : function(obj){
      console.log(obj);
    },
  },

  order : function(starterIndex, mainIndex, time, address){
    console.log(`Order received! ${} and `);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address : 'Via del sole, 21',
  mainIndex : 2,
  starterIndex : 2,
});


const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories );

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {menu = [], starterMenu : starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables 🍋
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// {a, b} = obj;  error! 
({a, b} = obj);
console.log(a,b); // 23, 7

// nested objects
const {fri : {open : o , close : c}} = openingHours;
console.log(o, c);





// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);


// let [main, , secondary ] = restaurant. categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);


// console.log(restaurant.order(2,0));
// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];   // 배열 선언 
// // const [i, , j] = nested; //디스트럭쳐링 배열 먼저 = 변수 할당 
// // console.log(i, j); 

// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 2, 5, 6

// // Default values 
// const [p, q, r] = [8, 9]
// console.log(p, q, r); // 8, 9, undefined

