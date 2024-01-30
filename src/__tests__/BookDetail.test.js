import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import BookDetail from '../components/BookDetail';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders BookDetail component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <BookDetail />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
