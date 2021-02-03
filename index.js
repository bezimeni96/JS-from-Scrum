// const forLoopWithVarVariable = () => {
//   for (let i = 0; i < 10; i++) {
//     var x = i;
//   }
//   console.log(x);
// }
// forLoopWithVarVariable();


// const forLoopWithLetVariable = () => {
//   for (let i = 0; i < 10; i++) {
//     let x = i;
//   }
//   console.log(x);
// }
// forLoopWithLetVariable();


// const x = 5;
// function printVariableOutsideOfFunction () {
//   console.log(x);
// }
// printVariableOutsideOfFunction();


// function createVariable() {
//   const x = 3;
// }
// console.log(x);



/* -----------------------------------------------------
              JS Anonymus functions
----------------------------------------------------- */
// const array = [1, 2, 3, 4, 5];
// const newArray = array.map(function(num) {
//   return num * num;
// });
// console.log(newArray);


// const sum = (function() {
//   return 5 + 8;
// }());
// console.log(sum);


// const sum = (() => 5 + 9)();
// console.log(sum);



/* -----------------------------------------------------
                        JS Arrays
----------------------------------------------------- */
// const colors = ['Red', 'Blue', 'Orange', 'Yellow', 'Green', 'Black'];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// colors.forEach(color => console.log(color));


// const rotateToTheRight = (array, step) => {
//   const realStep = array.length > step ? step :  (step % array.length);
//   const removedItems = array.splice(realStep, array.length-1);
//   const newArray = [...removedItems, ...array];
//   return newArray;
// }
// const newColors = rotateToTheRight(colors, 5);
// console.log(newColors);


// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.reduce((prevValue, curentValue) => prevValue + curentValue, 50));


// const makeArray = (num) => {
//   var array = [];
//   for (let i = 0; i <= num; i++) {
//     array.push(i)
//   }
//   var rightPart = ([...array].reverse());
//   rightPart.shift();

//   return [...array, ...rightPart]
// }
// console.log(makeArray(5));


var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];
const zooInventory = (zoo) => {
  var output = [];
  zoo.forEach(element => {
    output.push(element[0] + " the " + element[1][0] + " is " + element[1][1])
  })
  console.log(output);
}

zooInventory(myZoo);
// OUTPUT: 
// [
//   'King Kong the gorilla is 42', 
//   'Nemo the fish is 5',
//   'Punzsutawney Phil the groundhog is 11'
// ]