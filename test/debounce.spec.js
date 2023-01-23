describe('Debounce behavior', () => {
  it('function should be called 5 times', () => {
    const baz = {
      bar: () => {},
    };
    const spiedFooBar = jest.spyOn(baz, 'bar');

    jest.useFakeTimers();
    const func = baz.bar;

    func();
    func();
    func();
    func();
    func();

    jest.advanceTimersByTime(600);

    expect(spiedFooBar).toHaveBeenCalledTimes(5);

    jest.useRealTimers();
  });

  it('function should be called once', () => {
    const baz = {
      bar: () => {},
    };
    const spiedFooBar = jest.spyOn(baz, 'bar');

    jest.useFakeTimers();
    const func = purejs.debounce(baz.bar);

    func();
    func();
    func();
    func();
    func();

    jest.advanceTimersByTime(600);

    expect(spiedFooBar).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });
});
