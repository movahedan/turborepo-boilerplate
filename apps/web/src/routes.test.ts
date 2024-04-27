import { routes } from './routes';

describe('routes', () => {
  it('should return the correct paths for index', () => {
    expect(routes.index()).toBe('/');
  });
});
