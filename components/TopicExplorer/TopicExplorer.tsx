import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../Header/Header';
import RelatedTopics from '../RelatedTopics/RelatedTopics';
import History from '../History/History';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopicExplorer: React.FC = () => {
  const [currentTopic, setCurrentTopic] = useState<string>('react');
  const [history, setHistory] = useState<string[]>(['react']);

  const handleTopicClick = (topicName: string) => {
    setCurrentTopic(topicName);
    setHistory((prevHistory) => [...prevHistory, topicName]);
  };

  const handleHistoryClick = (index: number) => {
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


