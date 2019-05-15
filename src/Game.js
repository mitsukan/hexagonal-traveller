class Game extends Board {
  constructor (){
    super();
    this._player = new Player();
  }

  get player(){
    return this._player;
  }

}
