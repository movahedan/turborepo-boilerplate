import layout from './layout';

describe('<Layout />', () => {
  test('should render successfully', () => {
    const element = layout({
      children: <p data-testid="layout-content">children</p>,
    });

    expect(element).toBeTruthy();
  });
});
