class Character {
  static count = 0;

  constructor(x, y) {
    if (this.constructor === Character) {
      throw new Error('Abstract class Character cannot be instantiated!');
    }
    if (x <= 10 && y <= 10) {
      this.x = x;
      this.y = y;
    } else {
      throw new Error('The X or Y is out of bounds!')
    }
  }

  set setPosition(position) {
    this.x = position.x;
    this.y = position.y;
  }

  get position() {
    return {
      x: this.x,
      y: this.y
    }
  }

  static increaseCount() {
    Character.count += 1;
  }

  static getCount() {
    return Character.count;
  }
}


class PlayerCharacter extends Character {
  constructor(x, y) {
    super(x, y);
    Character.increaseCount();
  }
}

class NonPlayerCharacter extends Character{
  constructor(x, y) {
    super(x, y);
    Character.increaseCount();
  }
}

const pera = new PlayerCharacter(2,8)
console.log(Character.getCount());