import { render, screen, fireEvent } from '@testing-library/react';
import TopicExplorer from './TopicExplorer';

jest.mock('../History/History', () => ({ handleHistoryClick, history }) => (
  <div data-testid="history" onClick={() => handleHistoryClick(0)}>
    {history.join(', ')}
  </div>
));

jest.mock('../RelatedTopics/RelatedTopics', () => ({ topicName, onTopicClick }) => (
  <div data-testid="relatedTopics" onClick={() => onTopicClick('new topic')}>
    {topicName}
  </div>
));

describe('TopicExplorer component', () => {
  test('renders with correct initial state', () => {
    render(<TopicExplorer />);

    expect(screen.getByTestId('history').textContent).toBe('react');
    expect(screen.getByTestId('relatedTopics').textContent).toBe('react');
  });

  test('updates topics and history when a topic is clicked', () => {
    render(<TopicExplorer />);

    fireEvent.click(screen.getByTestId('relatedTopics'));

    expect(screen.getByTestId('history').textContent).toBe('react, new topic');
    expect(screen.getByTestId('relatedTopics').textContent).toBe('new topic');
  });

  test('updates topics and history when a history entry is clicked', () => {
    render(<TopicExplorer />);

    fireEvent.click(screen.getByTestId('relatedTopics'));
    fireEvent.click(screen.getByTestId('history'));

    expect(screen.getByTestId('history').textContent).toBe('react');
    expect(screen.getByTestId('relatedTopics').textContent).toBe('react');
  });
});
