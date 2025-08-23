'use strict';


// // Inventory
// function fruitInventory(fruit, qnt) {
//     const fruits = {
//         "apple": 10,
//         "orange": 15,
//         "sweet lime": 5,
//     };
//     const currentInventory = {
//         "apple": 10,
//         "orange": 15,
//         "sweet lime": 5,
//     };
//     console.log("Current Inventory:", currentInventory);
//     let quantity;
//     if (fruit in fruits) {
//         quantity = fruits[fruit];
//     } else return null;
//     if (quantity >= qnt){
//         const newQuantity = quantity - qnt;
//         fruits[fruit] = newQuantity;
//         console.log("Updated Inventory:", fruits);  
//         return true;      
//     } else {
//         return null;
//     }
// }


// // fruit processor
// function fruitProcessor(fruit1, qnt1, fruit2, qnt2) {
//     let isFruit1, isFruit2;
//     if (qnt1 && qnt2) {
//         isFruit1 = fruitInventory(fruit1, qnt1);
//         isFruit2 = fruitInventory(fruit2, qnt2);
//         if (isFruit1 && isFruit2) {
//             return `Today we are going to make a juice of (${qnt1}) ${fruit1} and (${qnt2}) ${fruit2} fruits.`; 
//         }
//     } else if (qnt1 && typeof qnt1 === 'number') {
//         isFruit1 = fruitInventory(fruit1, qnt1);
//         if (isFruit1) {
//             return `Let's make (${qnt1}) ${fruit1} juice for you.`;
//         }
//     } else if (qnt2 && typeof qnt2 === 'number') {
//         isFruit2 = fruitInventory(fruit2, qnt2);
//         if (isFruit2) {
//             return `Preparing (${qnt2}) ${fruit2} juice.`;
//         }        
//     } else {
//         return `Wrong order!`;
//     }
//     if (isFruit1 === null || isFruit2 === null) {
//         return `This order cannot be placed due to shortage of stock. Sorry for inconvinence.`; 
//     }
// }

// // function call
// const fruitJuice = fruitProcessor("orange", 5, "sweet lime", 2);
// console.log(fruitJuice);


// const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3)/3);

// const scoreDolphins = calcAverage(85,54,41);
// const scoreKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins Win (${Math.floor(avgDolphins)} Vs. ${Math.floor(avgKoalas)})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas Win (${Math.floor(avgKoalas)} Vs. ${Math.floor(avgDolphins)})`;
//     } else {
//         return "No team wins...";
//     }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

const key = "spiritualTask";

const ajit = {
    firstName: "Ajit",
    lastName: "",
    age: 34,
    hobbies: ["watching football", "listening music", "learning to code"],
    [key]: "meditates daily.",
};


const info = prompt(`Which information about Ajit you want to know?\nChoose between firstName, age, hobbies, ${key}`);

if (ajit[info]) {
    console.log(ajit[info]);    
} else {
    console.log("Sorry, this info is not available.");
    
}
