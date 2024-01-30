import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, Provider } from 'react-redux';
import store from '../redux/store';
import ReservationList from '../components/Reservations/ReservationList';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('renders ReservationList component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      users: {
        user: { id: 1},
      },
      reservations: {
        reservations: [
          {
            id: 1,
            date: '2023-04-11',
            due_date: '2023-04-21',
            city: 'Test Town',
            created_at: '2024-01-19T10:43:51.075Z',
            updated_at: '2024-01-19T10:43:51.075Z',
            user_id: 1,
            books: [
              { id: 1, name: 'Book 1' },
              { id: 2, name: 'Book 2' },
            ],
          },
        ],
      },
    }));
    Storage.prototype.getItem = jest.fn((key) => {
      if (key === 'user') {
        return JSON.stringify({ role: 'admin' });
      }
      return null;
    });
  });

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
