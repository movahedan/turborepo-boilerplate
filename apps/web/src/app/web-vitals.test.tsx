import { render } from '@testing-library/react';
import * as webVitals from 'next/web-vitals';

import * as envs from '@repo/utilities/envs';

import { WebVitals } from './web-vitals';

jest.mock('next/web-vitals', () => ({
  useReportWebVitals: jest.fn(),
}));

jest.mock('@repo/utilities/envs', () => ({
  envs: jest.fn(),
}));

describe('webVitals', () => {
  const spyEnvs = jest.spyOn(envs, 'envs');
  const spyUseReportWebVitals = jest.spyOn(webVitals, 'useReportWebVitals');
  const spyConsoleInfo = jest
    .spyOn(console, 'info')
    .mockImplementation(() => {});

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call useReportWebVitals with provided callback', () => {
    render(<WebVitals />);
    expect(spyUseReportWebVitals).toHaveBeenCalledWith(expect.any(Function));
  });

  test('should log metric in production environment', () => {
    spyEnvs.mockReturnValue({
      NODE_ENV: 'production',
      BUNDLE_ANALYZER: false,
      NEXT_PUBLIC_BASE_URL: '',
    });

    render(<WebVitals />);

    const callback = spyUseReportWebVitals.mock.calls[0][0];
    callback({ id: 'mock-id', name: 'mock-name', startTime: 0, value: 100 });

    expect(spyConsoleInfo).toHaveBeenCalledWith({
      id: 'mock-id',
      name: 'mock-name',
      startTime: 0,
      value: 100,
    });
  });

  test('should not log metric in non-production environment', () => {
    spyEnvs.mockReturnValue({
      NODE_ENV: 'development',
      BUNDLE_ANALYZER: false,
      NEXT_PUBLIC_BASE_URL: '',
    });

    render(<WebVitals />);

    const callback = spyUseReportWebVitals.mock.calls[0][0];
    callback({ id: 'mock-id', name: 'mock-name', startTime: 0, value: 100 });

    expect(spyConsoleInfo).not.toHaveBeenCalled();
  });
});
