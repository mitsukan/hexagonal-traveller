class Board{
  constructor() {
    this._array = [[new Tile(), new Tile()],[new Tile(), new Tile(), new Tile()],[new Tile(), new Tile()]];
    this._randomStart = new Array(2);
  }

  get array() {
    return this._array;
  }

  // get randomStart(){
  //   return this._randomStart;
  // }



  rollFirstIndex() {

    this._randomStart[0]=Math.floor(Math.random()*(2-0+1));

  }
  rollSecondIndex(){
    if (this._randomStart[0] === 0 ||this._randomStart[0] === 2){
        this._randomStart[1]=Math.floor(Math.random()*(1-0+1));
      }    else if (this._randomStart[0] ===1) {
        this._randomStart[1]=Math.floor(Math.random()*(2-0+1));
      }

  }
  randomStart(){
this.rollFirstIndex();
this.rollSecondIndex();

  }



}
