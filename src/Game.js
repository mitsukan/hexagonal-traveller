class Game extends Board {
  constructor (){
    super();
    this._player = new Player;
    this.randomStart();
  }

  get player(){
    return this._player;
  }

  set player(player) {
    this._player = player;
  }

  randomStart(){
    this._array[this._p1[0]][this._p1[1]].takePlayer(this.player);
  }

  movePlayer(i0,i1){
  this.player.moveTo(this._array[i0][i1]);
  }

}
