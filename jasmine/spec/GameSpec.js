describe("Game", () => {

  beforeEach(() => {
    game = new Game();
  });

  it("starts with a new player", () => {
    expect(typeof(game.player)).toBe("object");
  });
});
