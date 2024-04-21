import { classNames } from './string';

describe('classNames', () => {
  test('should return an empty string when input array is empty', () => {
    const result = classNames([]);
    expect(result).toBe('');
  });

  test('should concatenate class names with spaces', () => {
    const result = classNames(['class1', 'class2', 'class3']);
    expect(result).toBe('class1 class2 class3');
  });

  test('should filter out undefined, null, and true values', () => {
    const result = classNames(['class1', undefined, null, true, 'class2']);
    expect(result).toBe('class1 class2');
  });

  test('should handle boolean values correctly', () => {
    const result = classNames([true, false, 'class1', true, 'class2']);
    expect(result).toBe('class1 class2');
  });
});
