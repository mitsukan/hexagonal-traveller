describe("Board", () => {

  beforeEach(() => {
    board = new Board();
  });


  it("has an array", () => {
    expect(typeof(board.array)).toBe("object");
  });

  it("randomises the first index, returns 0", () => {
    spyOn(Math, 'random').and.returnValue(0);
    expect(board.rollFirstIndex()).toBe(0);
  });

});
