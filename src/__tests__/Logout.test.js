import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Logout from '../components/user/logout';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Logout component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Logout />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
