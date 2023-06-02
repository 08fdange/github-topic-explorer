import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar component', () => {
  render(<SearchBar onSearch={jest.fn()} />);

  const inputElement = screen.getByLabelText('Search for related topics');
  const buttonElement = screen.getByLabelText('Search');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('calls onSearch function with the search term', () => {
  const onSearchMock = jest.fn();

  render(<SearchBar onSearch={onSearchMock} />);

  const inputElement = screen.getByPlaceholderText(/search for topics/i);
  fireEvent.change(inputElement, { target: { value: 'react' } });

  const buttonElement = screen.getByLabelText('Search');
  fireEvent.click(buttonElement);

  expect(onSearchMock).toHaveBeenCalledWith('react');
});
