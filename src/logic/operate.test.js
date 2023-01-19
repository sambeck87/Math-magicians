import operate from './operate';

describe('Testing operations', () => {
  test('sum should be 13', () => {
    const result = operate(8, 5, '+');
    expect(result).toBe('13');
  });

  test('rest should be 24', () => {
    const result = operate(39, 15, '-');
    expect(result).toBe('24');
  });

  test('mult should be 122', () => {
    const result = operate(11, 11, 'x');
    expect(result).toBe('121');
  });

  test('div should be 12', () => {
    const result = operate(36, 3, '÷');
    expect(result).toBe('12');
  });

  test('div should be display error', () => {
    const result = operate(234, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });
});
