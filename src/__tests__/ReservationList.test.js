import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReservationList from '../components/Reservations/ReservationList';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('renders ReservationList component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <ReservationList />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
