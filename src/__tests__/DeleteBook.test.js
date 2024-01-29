import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DeleteBook from '../components/DeleteBook';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders DeleteBook component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <DeleteBook />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
