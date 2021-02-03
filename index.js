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


const sum = (() => 5 + 9)();
console.log(sum);