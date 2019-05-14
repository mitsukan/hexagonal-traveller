class Board extends Tile {
  constructor(array) {
    super();
    this._array = [[new Tile(), new Tile()],[new Tile(), new Tile(), new Tile()],[new Tile(), new Tile()]];
  }

  get array() {
    return this._array;
  }
}
