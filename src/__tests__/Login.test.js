import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Login from '../components/user/login';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Login component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
