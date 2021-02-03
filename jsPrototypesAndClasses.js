var count = 0;

function Character(x=0, y=0) {
  this.setPosition = (x, y) => {
    if (x <= 10 && y <= 10) {
      this.x = x;
      this.y = y;
    } else {
      throw new Error('The X or Y is out of bounds!')
    }
  }

  this.getPosition = function() {
    return {
      x: this.x,
      y: this.y
    }
  }

  this.incrementCount = function() {
    count += 1;
  }
  
  this.getCount = function() {
    return count;
  }

  this.setPosition(x,y);
  this.incrementCount()
}

function PlayerCharacter(x,y) {
  this.character = new Character(x,y)
}

function NonPlayerCharacter(x, y) {
  this.character = new Character(x, y)
}


const mika = new PlayerCharacter(1,2);
console.log(mika);

const luka = new PlayerCharacter(3,5);

const pera = new NonPlayerCharacter(5,2)