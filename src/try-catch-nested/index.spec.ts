import { main } from "./";

describe("nested try/catch test suites", () => {
  it('should log "inside error"', () => {
    expect(main).toThrowError("inside error");
  });
});
