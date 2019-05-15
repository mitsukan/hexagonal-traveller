class Player{
  constructor() {
    this._tile = undefined;
  }

  get tile(){
    return this._tile;
  }

  set tile(tile) {
    this._tile = tile;
  }

  moveTo(tile) {
    tile.player = this;
    this.tile.player = undefined;
    this.tile = tile;
  }
}
