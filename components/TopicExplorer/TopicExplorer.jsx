import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../Header/Header';
import RelatedTopics from '../RelatedTopics/RelatedTopics';
import History from '../History/History';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopicExplorer = () => {
  const [currentTopic, setCurrentTopic] = useState('react');
  const [history, setHistory] = useState(['react']);

  const handleTopicClick = (topicName) => {
    setCurrentTopic(topicName);
    setHistory((prevHistory) => [...prevHistory, topicName]);
  };

  const handleHistoryClick = (index) => {
    setHistory((prevHistory) => {
      const newHistory = prevHistory.slice(0, index + 1);
      setCurrentTopic(newHistory[newHistory.length - 1]);
      return newHistory;
    });
  };

  return (
    <>
      <Header 
        onSearch={handleTopicClick} 
        title="Github Topic Explorer" 
      />
      <MainContainer>
        <History 
          handleHistoryClick={handleHistoryClick} 
          history={history} 
        />
        <RelatedTopics
          topicName={currentTopic}
          onTopicClick={handleTopicClick}
        />
      </MainContainer>
    </>
  );
};

export default TopicExplorer;

