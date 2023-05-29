import React from 'react';
import styled from '@emotion/styled';

const HistoryContainer = styled.div`
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

const HistoryEntry = styled.div`
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
  margin-left: 2px;
  &:hover {
    background-color: rgba(177, 186, 196, 0.12);
  }
`;

const History = ({ handleHistoryClick, history }) => {
  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      {history.map((topicName, index) => (
        <HistoryEntry key={index} onClick={() => handleHistoryClick(index)}>
          {topicName}
        </HistoryEntry>
      ))}
    </HistoryContainer>
  );
};

export default History;
