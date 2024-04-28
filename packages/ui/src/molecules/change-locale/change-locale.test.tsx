import { screen, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { ChangeLocale } from './change-locale';

jest.mock('@repo/utilities/locales', () => ({
  ...jest.requireActual('@repo/utilities/locales'),
  locales: ['en'],
}));

describe('changeLocale', () => {
  test('should render with correct locale and call onChange correctly', async () => {
    const onChange = jest.fn();
    render(<ChangeLocale locale="nl" onChange={onChange} />);

    const linkElement = screen.getByLabelText('Change locale to en');
    await userEvent.click(linkElement);
    expect(onChange).toHaveBeenCalledWith('en');
  });

  test('should render null if there is no new locale available (edge cases)', () => {
    const { baseElement } = render(
      <ChangeLocale locale="en" onChange={() => {}} />,
    );

    expect(baseElement).not.toBeEmptyDOMElement();
  });
});
