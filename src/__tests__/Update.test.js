import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Update from '../components/user/update';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Update component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Update />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
