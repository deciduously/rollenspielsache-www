import React from 'react';
import { render } from '@testing-library/react';
import Info from './Info';

test('Renders first component of the list', () => {
  const { getByText } = render(<Info />);
  const linkElement = getByText(/C-compatible API/i);
  expect(linkElement).toBeInTheDocument();
});
