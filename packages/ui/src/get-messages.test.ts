import { getMessages } from './get-messages';

const sampleMessages = { greeting: 'Hello' };

jest.mock('../public/locales/en.json', () => sampleMessages);

describe('getMessages', () => {
  test('calls getMessages with correct path', async () => {
    const result = await getMessages('en');

    expect(result.greeting).toBe(sampleMessages.greeting);
  });
});
