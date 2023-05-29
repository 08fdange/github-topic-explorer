import React from 'react';
import useRelatedTopics from '../../hooks/useRelatedTopics';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styled from '@emotion/styled';

const TopicSection = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 64px);
  overflow: auto;
  padding: 16px 24px;
  width: 100%;
`;

const TopicsContainer = styled.div`
  box-sizing: border-box;
  margin: 8px 0;
`;

const AlternateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
  width: 100%;
`;

const CurrentTopic = styled.h4`
  color: white;
  font-weight: 500;
  margin: 0;
`;

const Topic = styled.div`
  align-items: center;
  border: 1px solid rgba(255,255,255,0.7);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0 16px;
  transition: background-color 0.3s ease;
  width: calc(100% - 32px);

  &:hover {
    background-color: rgba(177, 186, 196, 0.12);
  }
`;

const TopicName = styled.p`
  font-size: 20px;
`;

const Starcount = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-content: space-between;

  :after {
    background: url("/icons/star-icon.svg") no-repeat;
    content: "";
    display: block;
    margin-left: 8px;
    height: 24px;
    width: 24px;
  }
`;

const RelatedTopics = ({ topicName, onTopicClick }) => {
  const { error, loading, topics } = useRelatedTopics(topicName);

  if (error || loading) {
    return (
      <AlternateContainer>
        { loading ? <LoadingSpinner /> : <p>Error :(</p> }
      </AlternateContainer>
    )
  };

  return (
    <TopicSection>
      <CurrentTopic>
        {topicName}
      </CurrentTopic>
      <TopicsContainer>
        {topics.length < 1 && (<TopicName>There are no related topics.</TopicName>)}
        {topics.map(({ name, stargazerCount }) => (
          <Topic key={name} onClick={() => onTopicClick(name)}>
            <TopicName>
              {name}
            </TopicName>
            <Starcount>
              {stargazerCount}
            </Starcount>
          </Topic>
        ))}
      </TopicsContainer>
    </TopicSection>
  );
};

export default RelatedTopics;

