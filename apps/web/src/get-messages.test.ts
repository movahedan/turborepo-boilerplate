import { getMessages } from './get-messages';

jest.mock('@repo/web/public/locales/en.json', () => ({ greeting: 'Hello' }));

describe('getMessages', () => {
  test('calls getMessages with correct path', async () => {
    const locale = 'en';

    const result = await getMessages(locale);

    expect(result.greeting).toBe('Hello');
  });
});
