import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store'

jest.mock('./containers', () => ({
  Header: () => <div>Header</div>,
  MainContainer: () => <div>Main Container</div>
}))

test('App renders', () => {
  const { container } = render(
      <Provider store={store}>
          <App />
      </Provider>
  );
  expect(container.innerHTML).toMatch('Header')
});
