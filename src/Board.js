class Board{
  constructor(array) {
    this._array = [[new Tile(), new Tile()],[new Tile(), new Tile(), new Tile()],[new Tile(), new Tile()]];
  }

  get array() {
    return this._array;
  }

  // randomStart(){}

  rollFirstIndex() {
    return Math.floor(Math.random()*(2-0+1));
  }
}
