describe('first test', () => {
  it('sum 1 + 1 is 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('object deep comparison', () => {
    const user = { name: 'Ilia' };
    expect(user).toEqual({ name: 'Ilia' });
  });
});
