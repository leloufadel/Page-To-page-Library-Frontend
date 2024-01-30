import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReservationForm from '../components/Reservations/ReservationForm';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders ReservationForm component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <ReservationForm />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
