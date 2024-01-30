import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addReservation } from '../../redux/reservationSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Testing if reservationSlice reducers works', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      reservations: [],
      isLoading: true,
    });
  });

  it('should handle addReservation', () => {
    const payload = {
      reservation: {
        date: '2023-06-11',
        due_date: '2023-06-21',
        city: 'Windhoek',
      },
      book_ids: [1, 2],
    };
    const expectedAction = {
      type: 'reservations/addReservation',
      payload,
    };

    store.dispatch(addReservation(payload));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
