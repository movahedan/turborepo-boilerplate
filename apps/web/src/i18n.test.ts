import { getMessages } from './get-messages';
import requestConfig from './i18n';

jest.mock('./get-messages');
jest.mock('next-intl/server', () => ({
  getRequestConfig: jest.fn().mockImplementation((prop) => prop),
}));

describe('i18n.ts', () => {
  it('requestConfig.ts should call next-intl/server getRequestConfig function with correct arguments', async () => {
    await requestConfig({ locale: 'es' });

    expect(getMessages).toHaveBeenCalledWith('es');
  });
});
