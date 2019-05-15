class Tile{
  constructor(){
    this._player = undefined;
  }

  get player() {
    return this._player;
  }

  set player(player) {
    this._player = player;
  }

  takePlayer(player){
    this.player = player;
    this.player.tile = this;
  }
}
