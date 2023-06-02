import React from 'react';
import styled from '@emotion/styled';

interface HistoryProps {
  handleHistoryClick: (index: number) => void;
  history: string[];
}

const HistoryContainer = styled.section`
  border-right: 0.5px solid rgba(255,255,255,0.7);
  box-sizing: border-box;
  height: calc(100vh - 64px);
  padding: 12px;
  overflow: auto;
  width: 240px;
`;

const HistoryTitle = styled.h5`
  font-weight: 500;
  margin: 0 0 8px 0;
  padding: 0 8px;
`;

const HistoryEntry = styled.button`
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #E6EDF3;
  cursor: pointer;
  font-size: 16px;
  margin-left: 2px;
  padding: 8px;
  text-align: left;
  width: 100%;
  &:hover {
    background-color: rgba(177, 186, 196, 0.12);
  }
`;

const History: React.FC<HistoryProps> = ({ handleHistoryClick, history }) => {
  return (
    <HistoryContainer aria-label="History">
      <HistoryTitle>History</HistoryTitle>
      {history.map((topicName, index) => (
        <HistoryEntry
          aria-label={`Topic ${topicName}: history item ${index + 1}`} 
          key={index}
          onClick={() => handleHistoryClick(index)}
        >
          {topicName}
        </HistoryEntry>
      ))}
    </HistoryContainer>
  );
};

export default History;

