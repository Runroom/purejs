describe('Events onDocumentReady', () => {
  it('function should be called on document ready', () => {
    const foo = { bar: () => {} };
    const spiedFooBar = jest.spyOn(foo, 'bar');

    purejs.events.onDocumentReady(() => {
      foo.bar('baz');
    });

    expect(spiedFooBar).toHaveBeenCalledWith('baz');
  });
});

describe('Events onResizeWidth', () => {
  it('function should be called on resize width', () => {
    const foo = { bar: () => {} };
    const spiedFooBar = jest.spyOn(foo, 'bar');

    jest.useFakeTimers();

    purejs.events.onResizeWidth(() => {
      foo.bar('baz');
    });

    window.innerWidth -= 100;
    window.dispatchEvent(new Event('resize'));

    jest.advanceTimersByTime(150);

    expect(spiedFooBar).toHaveBeenCalledWith('baz');

    jest.useRealTimers();
  });

  it('function should not be called on resize height', () => {
    const foo = { bar: () => {} };
    const spiedFooBar = jest.spyOn(foo, 'bar');

    jest.useFakeTimers();

    purejs.events.onResizeWidth(() => {
      foo.bar('baz');
    });

    window.innerHeight -= 100;
    window.dispatchEvent(new Event('resize'));

    jest.advanceTimersByTime(150);

    expect(spiedFooBar).not.toHaveBeenCalledWith('baz');

    jest.useRealTimers();
  });
});
