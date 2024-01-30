import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { openModal, closeModal } from '../../redux/modalSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Testing if modalSlice reducers works', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      showModal: true,
    });
  });

  it('should handle openModal', () => {
    const expectedAction = {
      type: 'modal/openModal',
    };

    store.dispatch(openModal());
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should handle closeModal', () => {
    const expectedAction = {
      type: 'modal/closeModal',
    };

    store.dispatch(closeModal());
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
