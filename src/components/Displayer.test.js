import React from 'react';
import { render } from '@testing-library/react';
import Displayer from './Displayer';

test('renders correctly', () => {
  const tree = render(<Displayer total="20" next="15" operation="+" />);
  expect(tree.toJSON).toMatchSnapshot();
});
