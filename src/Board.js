class Board{
  constructor() {
    this._array = [[new Tile(), new Tile()],[new Tile(), new Tile(), new Tile()],[new Tile(), new Tile()]];
    this._rS = new Array(2);
  }

  get array() {
    return this._array;
  }

  // get randomStart(){
  //   return this._randomStart;
  // }

  randomStart(){
    this.rollFirstIndex();
    this.rollSecondIndex();
  }

  rollFirstIndex() {
    this._rS[0]=Math.floor(Math.random()*(2-0+1));
  }

  rollSecondIndex(){
    if(this._rS[0] === 0 ||this._rS[0] === 2) {
      this._rS[1]=Math.floor(Math.random()*(1-0+1));
    } else if(this._rS[0] ===1) {
      this._rS[1]=Math.floor(Math.random()*(2-0+1));
    }
  }

}
