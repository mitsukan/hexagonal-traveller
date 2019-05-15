class Board{
  constructor() {
    this._array = [[new Tile(), new Tile()],[new Tile(), new Tile(), new Tile()],[new Tile(), new Tile()]];
    this._p1 = new Array(2);
    this.rollFirstIndex();
    this.rollSecondIndex();
  }

  get array() {
    return this._array;
  }

  get p1() {
    return this._p1;
  }

  set p1(newPosition) {
    this._p1 = newPosition;
  }

  rollFirstIndex() {
    this._p1[0]=Math.floor(Math.random()*(2-0+1));
  }

  rollSecondIndex(){
    if(this._p1[0] === 0 ||this._p1[0] === 2) {
      this._p1[1]=Math.floor(Math.random()*(1-0+1));
    } else if(this._p1[0] ===1) {
      this._p1[1]=Math.floor(Math.random()*(2-0+1));
    }
  }

}
