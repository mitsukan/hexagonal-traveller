class Game extends Board {
  constructor (player){
    super();
    this._player = new Player();
  }

  get player(){
    return this._player;
  }
}
