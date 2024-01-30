import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import BookForm from '../components/bookform';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders BookForm component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BookForm />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
