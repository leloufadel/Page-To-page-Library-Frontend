import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Splash from '../components/Splash';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders Splash component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Splash />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
