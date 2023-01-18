import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders correctly', () => {
  const tree = render(<App />);
  expect(tree.toJSON).toMatchSnapshot();
});
