import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ApolloError } from '@apollo/client';
import formatCount from '../../utils/formatCount';
import RelatedTopics from './RelatedTopics';
import useRelatedTopics from '../../hooks/useRelatedTopics';

jest.mock('../../hooks/useRelatedTopics');

const mockedUseRelatedTopics = useRelatedTopics as jest.MockedFunction<typeof useRelatedTopics>;

describe('RelatedTopics component', () => {
  const mockOnTopicClick = jest.fn();
  const topicName = 'React';

  test('renders loading state', () => {
    mockedUseRelatedTopics.mockReturnValue({ loading: true, error: undefined, topics: [] });
  
    render(<RelatedTopics topicName={topicName} onTopicClick={mockOnTopicClick} />);
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });
  
  test('renders error state', () => {
    mockedUseRelatedTopics.mockReturnValue({ loading: false, error: new ApolloError({}), topics: [] });

    render(<RelatedTopics topicName={topicName} onTopicClick={mockOnTopicClick} />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  test('renders topics correctly', () => {
    const mockTopics = [
      { name: 'Redux', stargazerCount: 50000 },
      { name: 'Vue', stargazerCount: 20000 },
    ];
    mockedUseRelatedTopics.mockReturnValue({ loading: false, error: undefined, topics: mockTopics });

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
    mockedUseRelatedTopics.mockReturnValue({ loading: false, error: undefined, topics: mockTopics });

    render(<RelatedTopics topicName={topicName} onTopicClick={mockOnTopicClick} />);
    fireEvent.click(screen.getByText(mockTopics[0].name));
    expect(mockOnTopicClick).toBeCalledWith(mockTopics[0].name);
  });
});
