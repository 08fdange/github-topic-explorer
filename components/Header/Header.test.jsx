import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header with correct content', () => {
  render(<Header title="Github Topic Explorer" />);
  
  const textElement = screen.getByText(/Github Topic Explorer/i);
  expect(textElement).toBeInTheDocument();
});