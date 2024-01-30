import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setUserInfo, setUserInfoFromToken, resetUserInfo } from '../../redux/userSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Testing if userSlice reducers works', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth_token: null,
      isLoggedIn: false,
      user: null,
      headers: {},
    });
  });

  it('should handle setUserInfo', () => {
    const payload = {
      data: {
        user: { id: 1, name: 'Test User', role: 'user' },
        loading: true,
        message: 'Logged in successfully',
      },
    };
    const expectedAction = {
      type: 'users/setUserInfo',
      payload,
    };

    store.dispatch(setUserInfo(payload));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should handle setUserInfoFromToken', () => {
    const payload = {
      data: {
        user: { id: 1, name: 'Test User', role: 'user' },
        loading: true,
        message: 'Logged in successfully',
      },
    };
    const expectedAction = {
      type: 'users/setUserInfoFromToken',
      payload,
    };

    store.dispatch(setUserInfoFromToken(payload));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should handle resetUserInfo', () => {
    const expectedAction = {
      type: 'users/resetUserInfo',
    };

    store.dispatch(resetUserInfo());
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
