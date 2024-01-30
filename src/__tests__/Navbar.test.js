import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar/navbar';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Loading navbar component', () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn((key) => {
      if (key === 'user') {
        return JSON.stringify({ role: 'admin' });
      }
      return null;
    });
  });

  it('Renders correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const cc = screen.getByText('2024 Library Book');
    expect(cc).toBeInTheDocument();
  });

  it('Renders correct links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const books = screen.getByRole('link', { name: 'Books' });
    const addBook = screen.getByRole('link', { name: 'Add Book +' });
    const deleteBook = screen.getByRole('link', { name: 'Delete Book -' });
    const verify = screen.getByRole('link', { name: 'Give Permission' });

    expect(books).toHaveAttribute('href', '/MainPage');
    expect(addBook).toHaveAttribute('href', '/BookForm');
    expect(deleteBook).toHaveAttribute('href', '/deletebook');
    expect(verify).toHaveAttribute('href', '/update');
  });
});
