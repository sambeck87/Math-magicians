import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';

test('renders correct', () => {
  const tree = render(<Quote />);
  expect(tree.toJSON).toMatchInlineSnapshot('undefined');
});
