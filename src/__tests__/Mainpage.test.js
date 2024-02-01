import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainPage from '../components/MainPage';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders MainPage component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
