import { render, screen, fireEvent } from '@testing-library/react';
import formatCount from '../../utils/formatCount';
import RelatedTopics from './RelatedTopics';
import useRelatedTopics from '../../hooks/useRelatedTopics';

jest.mock('../../hooks/useRelatedTopics', () => jest.fn());

describe('RelatedTopics component', () => {
  const mockOnTopicClick = jest.fn();
  const topicName = 'React';

  test('renders loading state', () => {
    useRelatedTopics.mockReturnValue({ loading: true, error: false, topics: [] });
  
    render(<RelatedTopics topicName={topicName} onTopicClick={mockOnTopicClick} />);
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });
  
  test('renders error state', () => {
    useRelatedTopics.mockReturnValue({ loading: false, error: true, topics: [] });

    render(<RelatedTopics topicName={topicName} onTopicClick={mockOnTopicClick} />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  test('renders topics correctly', () => {
    const mockTopics = [
      { name: 'Redux', stargazerCount: 50000 },
      { name: 'Vue', stargazerCount: 20000 },
    ];
    useRelatedTopics.mockReturnValue({ loading: false, error: false, topics: mockTopics });

    render(<RelatedTopics topicName={topicName} onTopicClick={mockOnTopicClick} />);
    mockTopics.forEach((topic) => {
      expect(screen.getByText(topic.name)).toBeInTheDocument();
      expect(screen.getByText(formatCount(topic.stargazerCount))).toBeInTheDocument();
    });
  });

  test('onTopicClick is called with correct topic name on topic click', () => {
    const mockTopics = [
      { name: 'Redux', stargazerCount: 50000 },
    ];
    useRelatedTopics.mockReturnValue({ loading: false, error: false, topics: mockTopics });

    render(<RelatedTopics topicName={topicName} onTopicClick={mockOnTopicClick} />);
    fireEvent.click(screen.getByText(mockTopics[0].name));
    expect(mockOnTopicClick).toBeCalledWith(mockTopics[0].name);
  });
});
