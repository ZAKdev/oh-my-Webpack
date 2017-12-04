const sum = (a, b) => {
  return a + b;
}

describe('addition', () => {
  it('Should add two numbers', () => {
    expect(sum(2, 2)).toEqual(4)
  })
})