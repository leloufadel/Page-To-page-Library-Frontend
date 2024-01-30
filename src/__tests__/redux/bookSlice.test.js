import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addBook, deleteBook } from '../../redux/bookSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Testing if bookSlice reducers works', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      books: [],
      isLoading: true,
    });
  });

  it('should handle addBook', () => {
    const payload = {
      book: {
        name: 'The Complete Book Of Zen',
        cover_photo: 'https://za.pinterest.com/pin/273945589806066227/',
        author: 'Wong Kiew Kit',
        category: 'Philosophy',
        info: 'A comprehensive guide to Zen philosophy.',
        publisher: 'Vermillion',
        publish_date: '1998-11-11',
      },
    };
    const expectedAction = {
      type: 'books/addBook',
      payload,
    };

    store.dispatch(addBook(payload));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should handle deleteBook', () => {
    const bookId = 1;
    const expectedAction = {
      type: 'books/deleteBook',
      payload: bookId,
    };

    store.dispatch(deleteBook(bookId));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
