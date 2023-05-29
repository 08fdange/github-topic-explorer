import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar component', () => {
  render(<SearchBar onSearch={jest.fn()} />);

  const inputElement = screen.getByTestId('search-input');
  const buttonElement = screen.getByTestId('search-button');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('calls onSearch function with the search term', () => {
  const onSearchMock = jest.fn();

  render(<SearchBar onSearch={onSearchMock} />);

  const inputElement = screen.getByPlaceholderText(/search for topics/i);
  fireEvent.change(inputElement, { target: { value: 'react' } });

  const buttonElement = screen.getByRole('button', { name: '' });
  fireEvent.click(buttonElement);

  expect(onSearchMock).toHaveBeenCalledWith('react');
});
