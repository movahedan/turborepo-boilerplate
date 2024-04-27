import { screen, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { ChangeLocale } from './change-locale';

describe('changeLocale', () => {
  test('should render with correct locale and call onChange correctly', async () => {
    const onChange = jest.fn();
    render(<ChangeLocale locale="en" onChange={onChange} />);

    const linkElement = screen.getByLabelText('Change locale to nl');
    await userEvent.click(linkElement);
    expect(onChange).toHaveBeenCalledWith('nl');
  });
});
