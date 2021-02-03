// JS object
const jsObj = {
  firstName: "Pera",
  lastName: "Peric",
  age: 30
}

// JSON object
const jsonObj = {
  "firstName": "Pera",
  "lastName": "Peric",
  "age": 30
}

// const jsPerson = JSON.parse(jsonObj);

// const jsonPerson = JSON.stringify(jsonObj);

const jsArray = [1, 2, 3, 4, 5];
const jsonArray = '[1, 2, 3, 4, 5]';

const array = JSON.parse(jsonArray);
array.forEach(element => {
  console.log(element)
});