import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calc from './Calculator';

test('renders correctly', () => {
  const tree = render( <Calc />)
  expect(tree.toJSON).toMatchSnapshot();
});
