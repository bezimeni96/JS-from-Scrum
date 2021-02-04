class Field {
  constructor(maxX=10, maxY=10) {
    this.characters = [];
    this.maxX = maxX;
    this.maxY = maxY;
  }

  addCharacter(character) {
    if (character.x > this.maxX || character.y > this.maxY) {
      throw Error("Ovaj karakter ne moze da stane u dimenzije ove table");
    }
    this.characters.push(character);
  }

  whereIsThisCharacter(character) {
    const trazeniKarakter = this.characters.find(char => char === character);
    return "x: " + trazeniKarakter.x + ", y: " + trazeniKarakter.y;
  }

  get characterCount() {
    return this.characters.length;
  }
}