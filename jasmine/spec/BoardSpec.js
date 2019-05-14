describe("Board", () => {

  beforeEach(() => {
    board = new Board();
  });

  it("has an array", () => {
    expect(typeof(board.array)).toBe("object");
  });
});
