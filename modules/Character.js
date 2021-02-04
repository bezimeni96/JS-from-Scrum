class Character {
  static count = 0;

  constructor(position, field) {
    if (this.constructor === Character) {
      throw new Error('Abstract class Character cannot be instantiated!');
    }
    this.field = field;
    if (position.x <= this.field.maxX && position.y <= this.field.maxY) {
      this.x = position.x;
      this.y = position.y;
      this.field.addCharacter(this);
    } else {
      throw new Error('The X or Y is out of bounds!')
    }
  }

  set setPosition(position) {
    if (position.x <= this.field.maxX && position.y <= this.field.maxY) {
      this.x = position.x;
      this.y = position.y;
    } else {
      throw new Error('The X or Y is out of bounds!')
    }
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