const getRandomPositionOnField = (field) => {
  return {
    x: Math.floor(Math.random() * field.maxX) + 1,
    y: Math.floor(Math.random() * field.maxY) + 1
  }
}

const myField = new Field();
const char1 = new PlayerCharacter(getRandomPositionOnField(myField), myField);
const char2 = new NonPlayerCharacter(getRandomPositionOnField(myField), myField);
const char3 = new PlayerCharacter(getRandomPositionOnField(myField), myField);
const char4 = new PlayerCharacter(getRandomPositionOnField(myField), myField);

console.log(myField.whereIsThisCharacter(char1));