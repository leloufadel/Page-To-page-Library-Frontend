import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Verify from '../components/user/verify';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Verify component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Verify />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
