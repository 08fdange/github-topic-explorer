import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import formatCount from '../../utils/formatCount';
import useRelatedTopics from '../../hooks/useRelatedTopics';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const TopicSection = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 64px);
  overflow: auto;
  padding: 16px 24px;
  width: 100%;
`;

const TopicsContainer = styled.section`
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

const Topic = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.7);
  border-radius: 8px;
  color: #E6EDF3;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;


  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
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

const RelatedTopics = ({ onTopicClick, topicName }) => {
  const { error, loading, topics } = useRelatedTopics(topicName);

  if (error || loading) {
    return (
      <AlternateContainer>
        { loading ? <LoadingSpinner /> : (
          <p aria-label="Related topics error" role="alert">Error ☹️</p>
        )}
      </AlternateContainer>
    )
  };

  return (
    <TopicSection role="main">
      <CurrentTopic>
        {topicName}
      </CurrentTopic>
      <TopicsContainer aria-label="Related topics">
        {topics.length < 1 && (<TopicName>There are no related topics.</TopicName>)}
        {topics.map(({ name, stargazerCount }) => (
          <Topic
            aria-label={`Topic ${name} with ${stargazerCount} stars`}
            key={name} 
            onClick={() => onTopicClick(name)}
          >
            <TopicName>
              {name}
            </TopicName>
            <Starcount>
              {formatCount(stargazerCount)}
            </Starcount>
          </Topic>
        ))}
      </TopicsContainer>
    </TopicSection>
  );
};

RelatedTopics.propTypes = {
  onTopicClick: PropTypes.func.isRequired,
  topicName: PropTypes.string.isRequired,
};

export default RelatedTopics;

