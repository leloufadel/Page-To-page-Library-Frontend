import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Signup from '../components/user/signup';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Signup component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Signup />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
