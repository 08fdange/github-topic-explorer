import { ApolloError, useQuery, gql } from '@apollo/client';

const GET_RELATED_TOPICS = gql`
  query GetRelatedTopics($topicName: String!, $first: Int!) {
    topic(name: $topicName) {
      name
      relatedTopics (first: $first) {
        name
        stargazerCount
      }
    }
  }
`;

const useRelatedTopics = (topicName: string, first: number = 10) => {
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS, {
    variables: { topicName, first },
  });

  return {
    loading,
    error,
    topics: data?.topic?.relatedTopics || [],
  };
};

export default useRelatedTopics;

