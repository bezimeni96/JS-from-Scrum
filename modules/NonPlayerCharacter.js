class NonPlayerCharacter extends Character{
  constructor(x, y) {
    super(x, y);
    Character.increaseCount();
  }
}