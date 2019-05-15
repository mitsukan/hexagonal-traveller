class Game extends Board {
  constructor (){
    super();
    this.randomStart();
  }

  get player(){
    return this._player;
  }

  randomStart(){
    this._array[this._rS[0]][this._rS[1]].chair.push(new Player);
  }

}
