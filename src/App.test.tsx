import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./containers', () => ({ Header: () => <div>Header</div>}))

test('App renders', () => {
  const { container } = render(<App />);
  expect(container.innerHTML).toMatch('Header')
});
