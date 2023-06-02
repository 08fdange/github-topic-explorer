import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import History from './History';

describe('History component', () => {
  const mockHandleHistoryClick = jest.fn();
  const history = ['react', 'angular', 'vue'];

  beforeEach(() => {
    render(<History handleHistoryClick={mockHandleHistoryClick} history={history} />);
  });

  test('renders history title', () => {
    const titleElement = screen.getByText(/History/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders history entries', () => {
    history.forEach(topic => {
      const topicElement = screen.getByText(topic);
      expect(topicElement).toBeInTheDocument();
    });
  });

  test('handleHistoryClick is called with correct index on history entry click', () => {
    const topicElement = screen.getByText('angular');
    fireEvent.click(topicElement);
    expect(mockHandleHistoryClick).toBeCalledWith(1);
  });
});
