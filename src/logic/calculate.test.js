import calculate from "./calculate";

const test1 = {
  total: 20,
  next: 20,
  operation: '+',
}

const test2 = {
  total: 100,
  next: 20,
  operation: '-',
}

const test3 = {
  total: 200,
  next: 20,
  operation: '÷',
}

const test4 = {
  total: 8,
  next: 9,
  operation: 'x',
}

const test5 = {
  total: 50,
  next: 30,
  operation: '%',
}

const test6 = {
  total: 78,
  next: 12,
  operation: 'AC',
}

describe('Testing calculate return', () => {
  test('number should be 40, next and operation should be null', () => {
    const result = calculate(test1, '=')
    expect(result.total).toBe('40');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  })

  test('number should be 80, next and operation should be null', () => {
    const result = calculate(test2, '=')
    expect(result.total).toBe('80');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  })

  test('number should be 10, next and operation should be null', () => {
    const result = calculate(test3, '=')
    expect(result.total).toBe('10');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  })

  test('number should be 72, next and operation should be null', () => {
    const result = calculate(test4, '=')
    expect(result.total).toBe('72');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  })

  test('number should be 20, next and operation should be null', () => {
    const result = calculate(test5, '=')
    expect(result.total).toBe('20');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  })

  test('all should be null', () => {
    const result = calculate(test6, 'AC')
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  })
})

