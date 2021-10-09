import React from 'react';
import App from './App';

jest.mock('./containers', () => ({
  Header: () => <div>Header</div>,
  MainContainer: () => <div>Main Container</div>
}))

test('App renders', () => {
  const { container } = renderWithProvider(() => <App />)
  expect(container.innerHTML).toMatch('Header')
  expect(container.innerHTML).toMatch('Main Container')
});
