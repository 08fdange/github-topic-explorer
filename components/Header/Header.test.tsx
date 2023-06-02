import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header with correct content', () => {
  render(<Header title="Github Topic Explorer" onSearch={jest.fn()} />);

  const textElement = screen.getByText(/Github Topic Explorer/i);
  const imageElement = screen.getByAltText(/Github Icon/i);
  const searchBarElement = screen.getByTestId('search-form');

  expect(textElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(searchBarElement).toBeInTheDocument();
});