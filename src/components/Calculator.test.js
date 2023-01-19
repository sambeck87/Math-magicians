import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calc from './Calculator';

test('renders correctly', () => {
  const tree = render(<Calc />);
  expect(tree.toJSON).toMatchSnapshot();
});

describe('testing buttons', () => {
  for (let i = 0; i < 10; i += 1) {
    test(`button ${i}`, () => {
      render(<Calc />);
      fireEvent.click(screen.getByText(`${i}`));
      const testDisplay = screen.getByTestId('result').textContent;
      expect(testDisplay).toMatch(`${i}`);
    });
  }

  test('button +', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('+'));
    const testDisplay = screen.getByTestId('result').textContent;
    expect(testDisplay).toMatch('+');
  });

  test('button -', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('-'));
    const testDisplay = screen.getByTestId('result').textContent;
    expect(testDisplay).toMatch('-');
  });

  test('button x', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('x'));
    const testDisplay = screen.getByTestId('result').textContent;
    expect(testDisplay).toMatch('x');
  });

  test('button ÷', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('÷'));
    const testDisplay = screen.getByTestId('result').textContent;
    expect(testDisplay).toMatch('÷');
  });

  test('button AC', () => {
    render(<Calc />);
    fireEvent.click(screen.getByText('AC'));
    const testDisplay = screen.getByTestId('result').textContent;
    expect(testDisplay).toMatch('');
  });
});
